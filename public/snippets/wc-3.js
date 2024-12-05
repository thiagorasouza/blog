// Web Component
function defineWebComponent(name, templateString) {
  const templateParsed = new DOMParser()
    .parseFromString(`<template>${templateString}</template>`, "text/html")
    .querySelector("template").content;

  customElements.define(
    name,
    class extends HTMLElement {
      constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(templateParsed.cloneNode(true));
      }
    },
  );
}
