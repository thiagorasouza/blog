// Web Component
class BlogPost extends HTMLElement {
  constructor() {
    super();

    const htmlString = /* HTML */ `
      <div>"I'm a blog post"</div>
    `;
    
    // Creates a shadow dom and attaches elements
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = htmlString;
  }
}

customElements.define("blog-post", BlogPost);

// Usage
<blog-post></blog-post>

