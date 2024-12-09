class BlogPost extends WebComponent {
  //...
  html() {
    return /* HTML */ `
      <div>
        <slot name="post-text">Fallback text.</slot>
      </div>
    `;
  }
}

customElements.define("blog-post", BlogPost);

// Usage
<blog-post>
  <p slot="post-title">The post text</p>
</blog-post>