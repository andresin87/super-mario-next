import Entity from "./Entity.js";
import { loadMarioSprites } from "./sprites.js";
import Velocity from "./traits/Velocity.js";
import Jump from "./traits/Jump.js";

export const createMario = async () => {
  const marioSprites = await loadMarioSprites();
  const mario = new Entity();
  mario.addTrait(new Velocity());
  mario.addTrait(new Jump());

  mario.draw = function (context) {
    marioSprites.draw("idle", context, this.position.x, this.position.y);
  };

  return mario;
};
