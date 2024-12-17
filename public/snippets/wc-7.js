class WebComponent extends HTMLElement {
  constructor() {
    super();

    // Re-renders the DOM when state is set to a new value
    this._state = new Proxy(this.init(), {
      set: (target, property, value) => {
        target[property] = value;
        this.render();
        return true;
      },
    });

    // Creates the Shadow DOM
    this.shadow = this.attachShadow({ mode: "open" });

    // Triggers the first render
    this.render();
  }

  set state(obj) {
    for (const key in obj) {
      this._state[key] = obj[key];
    }
  }

  get state() {
    return this._state;
  }

 // ...
}
