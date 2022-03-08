import Vector2 from "./Vector2.js";

class Entity {
  #position = new Vector2(0, 0);
  #velocity = new Vector2(0, 0);
  #traits = [];

  get position() {
    return this.#position;
  }
  set position(position) {
    this.#position = position;
  }
  get velocity() {
    return this.#velocity;
  }
  set velocity(velocity) {
    this.#velocity = velocity;
  }
  get traits() {
    return this.#traits;
  }

  addTrait(trait) {
    this.traits.push(trait);
    this[trait.NAME] = trait;
  }

  update(deltaTime) {
    this.traits.forEach((trait) => {
      trait.update(this, deltaTime);
    });
  }
}

export default Entity;
