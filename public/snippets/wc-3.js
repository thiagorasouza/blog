class WebComponent extends HTMLElement {
  constructor() {
    super();

    const templateString = /* HTML */ `
      <template>
        <style>${this.styles()}</style>
        ${this.html()}
      </template>
    `;

    const template = new DOMParser()
      .parseFromString(templateString, "text/html")
      .querySelector("template").content;
    
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.cloneNode(true));
  }
}