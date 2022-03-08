import { loadLevel } from "./loaders.js";
import { loadBackgroundSprites, loadMarioSprites } from "./sprites.js";
import { createBackgroundLayer } from "./layers.js";
import Compositor from "./Compositor.js";

const createSpriteLayer = (sprite, pos) => {
  return (context) => {
    for (let i = 0; i < 20; i++) {
      sprite.draw("idle", context, pos.x + i * 16, pos.y);
    }
  };
};

const useSuperMarioCanvas = async (node) => {
  if (!node) return null;
  const context = node.getContext("2d");

  const compositor = new Compositor();

  const [backgroundSprites, marioSprites, level] = await Promise.all([
    loadBackgroundSprites(),
    loadMarioSprites(),
    loadLevel("1-1"),
  ]);
  const backgroundLayer = createBackgroundLayer(
    level.backgrounds,
    backgroundSprites
  );
  compositor.layers.push(backgroundLayer);

  const pos = { x: 0, y: 0 };

  const spriteLayer = createSpriteLayer(marioSprites, pos);
  compositor.layers.push(spriteLayer);

  const update = () => {
    compositor.draw(context);
    pos.x += 2;
    pos.y += 2;
    requestAnimationFrame(update);
  };
  update();
};

export default useSuperMarioCanvas;
