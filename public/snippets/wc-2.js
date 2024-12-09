class BlogPost extends HTMLElement {
  constructor() {
    super();

    // Bundle styles and html
    const templateString = /* HTML */ `
      <template>
        <style> div { font-weight: 700; } </style>
        <div>"I'm a blog post"</div>
      </template>
    `;

    // Parses the template
    const template = new DOMParser()
      .parseFromString(templateString, "text/html")
      .querySelector("template").content;
    
    // Attaches a copy of the parsed template
    const shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.cloneNode(true));
  }
}

customElements.define("blog-post", BlogPost);