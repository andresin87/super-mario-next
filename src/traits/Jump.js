import Trait from "../Trait.js";

class Jump extends Trait {
  #duration = 0.5;
  #momentum = 200;
  #engageTime = 0;
  constructor() {
    super("jump");
  }

  start() {
    this.#engageTime = this.#duration;
  }

  cancel() {
    this.#engageTime = 0;
  }

  update(entity, deltaTime) {
    if (this.#engageTime > 0) {
      entity.velocity.y = -this.#momentum;
      this.#engageTime -= deltaTime;
    }
  }
}

export default Jump;
