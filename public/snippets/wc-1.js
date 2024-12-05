// Web Component
customElements.define(
  "blog-post",
  class extends HTMLElement {
    constructor() {
      super();

      // Creates a div - imperative mode
      const div = document.createElement("div");
      div.textContent = "I'm a blog post";

      // Creates a shadow dom and attaches the div
      const shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(div);
    }
  },
);
