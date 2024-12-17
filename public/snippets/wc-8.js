class WebComponent extends HTMLElement {
  //..

  render() {
    //..
    
    // Attaches a copy of the template to the now empty Shadow DOM
    this.shadow.appendChild(template.cloneNode(true));

    // Attaches listeners
    this.listeners();
  }

  handle(id, event, handler) {
    this.shadow.getElementById(id).addEventListener(event, handler);
  }
}