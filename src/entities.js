import Entity from "./Entity.js";
import { loadMarioSprites } from "./sprites.js";

export const createMario = async () => {
  const marioSprites = await loadMarioSprites();
  const mario = new Entity();

  mario.draw = function (context) {
    marioSprites.draw("idle", context, this.position.x, this.position.y);
  };
  mario.update = function (deltaTime) {
    this.position.x += this.velocity.x * deltaTime;
    this.position.y += this.velocity.y * deltaTime;
  };

  return mario;
};
