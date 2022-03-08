class KeyboardState {
  static KEYS = {
    PRESSED: Symbol("PRESSED"),
    RELEASED: Symbol("RELEASED"),
  };
  #keyStates = new Map(); // Holds teh current state of a given Key
  #keyMap = new Map(); // Holds the callback funcions for a key code

  get keyStates() {
    return this.#keyStates;
  }

  get keyMap() {
    return this.#keyMap;
  }

  addMapping(keyCode, callback) {
    this.#keyMap.set(keyCode, callback);
  }

  handleEvent(event) {
    const { keyCode } = event;

    if (!this.#keyMap.has(keyCode)) {
      // Did not have key mapped
      return;
    }

    event.preventDefault();

    const keyState =
      event.type === "keydown"
        ? KeyboardState.KEYS.PRESSED
        : KeyboardState.KEYS.RELEASED;

    if (this.keyStates.get(keyCode) === keyState) {
      return;
    }

    this.keyStates.set(keyCode, keyState);
    this.keyMap.get(keyCode)(keyState);
  }

  listenTo(element) {
    ["keydown", "keyup"].forEach((eventName) => {
      element.addEventListener(eventName, (event) => {
        this.handleEvent(event);
      });
    });
  }
}

export default KeyboardState;
