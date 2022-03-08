import Trait from "../Trait.js";

class Velocity extends Trait {
  constructor() {
    super("momentum");
  }
  update(entity, deltaTime) {
    entity.position.x += entity.velocity.x * deltaTime;
    entity.position.y += entity.velocity.y * deltaTime;
  }
}

export default Velocity;
