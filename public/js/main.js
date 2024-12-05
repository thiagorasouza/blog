// customElements.define(
//   "blog-post",
//   class extends HTMLElement {
//     constructor() {
//       super();

//       const template = document.getElementById("blog-post-template");
//       const templateContent = template.content;

//       const shadowRoot = this.attachShadow({ mode: "open" });
//       shadowRoot.appendChild(templateContent.cloneNode(true));
//     }

//     connectedCallback() {
//       console.log("Blog-post connected");
//     }
//   },
// );
