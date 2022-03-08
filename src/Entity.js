import Vector2 from "./Vector2.js";

class Entity {
  #position = new Vector2(0, 0);
  #velocity = new Vector2(0, 0);

  get position() {
    return this.#position;
  }
  get velocity() {
    return this.#velocity;
  }
}

export default Entity;
