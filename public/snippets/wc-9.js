// Web Component
class BlogPost extends WebComponent {
  constructor() {
    super();
  }

  init() {
    return {
      likes: 0,
    };
  }

  listeners() {
    this.handle("btn-add-like", "click", () => {
      this.state.likes = this.state.likes + 1;
    });
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

// Usage
<blog-post>
  <h2 slot="post-title">#1 Blog Post</h2>
  <p slot="post-body">
    Lorem ipsum dolor sit amet consectetur,
    adipisicing elit.
  </p>
</blog-post>

<blog-post>
  <h2 slot="post-title">#2 Blog Post</h2>
  <p slot="post-body">
    Deleniti assumenda architecto aliquid
    voluptas eum quam earum quae dolore.
  </p>
</blog-post>