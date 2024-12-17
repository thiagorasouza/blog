class WebComponent extends HTMLElement {
  constructor() {
    super();

    // Creates the Shadow DOM
    this.shadow = this.attachShadow({ mode: "open" });

    // Triggers the first render
    this.render();
  }

  render() {
    // Bundle styles and html
    const templateString = /* HTML */ `
      <template>
        <style>${this.styles()}</style>
        ${this.html()}
      </template>
    `;

    // Parses the template
    const template = new DOMParser()
      .parseFromString(templateString, "text/html")
      .querySelector("template").content;

    // Clears the Shadow DOM
    this.shadow.innerHTML = "";

    // Attaches a copy of the template to the now empty Shadow DOM
    this.shadow.appendChild(template.cloneNode(true));
  }
}
