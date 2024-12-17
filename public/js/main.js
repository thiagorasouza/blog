class WebComponent extends HTMLElement {
  constructor() {
    super();

    // Listener to re-render the DOM when state is changed
    this._state = new Proxy(this.init(), {
      set: (target, property, value) => {
        target[property] = value;
        this.render();
        return true;
      },
    });

    // Creates a Shadow DOM
    this.shadow = this.attachShadow({ mode: "open" });

    // Triggers the first render
    this.render();
  }

  // Giving direct access to this._state could overwrite the proxy,

  set state(obj) {
    for (const key in obj) {
      this._state[key] = obj[key];
    }
  }

  get state() {
    return this._state;
  }

  render() {
    // Bundle styles and html
    const template = new DOMParser()
      .parseFromString(
        `<template><style>${this.styles()}</style>${this.html()}</template>`,
        "text/html",
      )
      .querySelector("template").content;

    // Clears the Shadow DOM
    this.shadow.innerHTML = "";

    // Attaches a copy of the template to the Shadow DOM
    this.shadow.appendChild(template.cloneNode(true));

    // Attaches listeners
    this.listeners();
  }

  handle(id, event, handler) {
    this.shadow.getElementById(id).addEventListener(event, handler);
  }
}

class BlogPost extends WebComponent {
  constructor() {
    super();
  }

  // Defining functions instead of variables is a way
  // for the parent class to access child content
  init() {
    return {
      likes: 0,
    };
  }

  styles() {
    return /* CSS */ `
      .post-title {
        color: red;
      }
      .post-body {
        color: blue;
      }
    `;
  }

  listeners() {
    this.handle("btn-add-like", "click", () => {
      this.state.likes = this.state.likes + 1;
    });
  }

  html() {
    return /* HTML */ `
      <article>
        <div class="post-title">
          <slot name="post-title">[[Post Title]]</slot>
        </div>
        <div class="post-body">
          <slot name="post-body">[[Post Body]]</slot>
          <p>Likes: ${this.state.likes}</p>
          <button id="btn-add-like">Add +1 Like</button>
        </div>
      </article>
    `;
  }
}

customElements.define("blog-post", BlogPost);
