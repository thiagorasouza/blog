class BlogPost extends WebComponent {
  constructor() {
    super();
  }

  styles() {
    return /* CSS */ `div { font-weight: 700; }`;
  }

  html() {
    return /* HTML */ `<div>"I'm a blog post"</div>`;
  }
}

customElements.define("blog-post", BlogPost);