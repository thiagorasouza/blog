// Web Component
const templateString = /* HTML */ `
  <template>
    <div>"I'm a blog post"</div>
  </template>
`;

const templateParsed = new DOMParser()
  .parseFromString(templateString, "text/html")
  .querySelector("template").content;

customElements.define(
  "blog-post",
  class extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: "open" });
      const templateClone = templateParsed.cloneNode(true);

      shadow.appendChild(templateClone);
    }
  },
);
