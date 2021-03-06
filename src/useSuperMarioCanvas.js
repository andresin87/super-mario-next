import { loadLevel } from "./loaders.js";
import { loadBackgroundSprites } from "./sprites.js";
import { createBackgroundLayer, createSpriteLayer } from "./layers.js";
import Compositor from "./Compositor.js";
import Timer from "./Timer.js";
import Keyboard from "./KeyboardState.js";
import { createMario } from "./entities.js";

const useSuperMarioCanvas = async (node) => {
  if (!node) return null;
  const context = node.getContext("2d");
  const compositor = new Compositor();

  const [backgroundSprites, mario, level] = await Promise.all([
    loadBackgroundSprites(),
    createMario(),
    loadLevel("1-1"),
  ]);
  const backgroundLayer = createBackgroundLayer(
    level.backgrounds,
    backgroundSprites
  );
  compositor.layers.push(backgroundLayer);

  const gravity = 30;
  mario.position.set(64, 180);

  const SPACE = 32;
  const input = new Keyboard();
  input.addMapping(SPACE, (keyState) => {
    if (keyState === Keyboard.KEYS.PRESSED) {
      mario.jump.start();
    } else {
      mario.jump.cancel();
    }
  });
  input.listenTo(window);

  const spriteLayer = createSpriteLayer(mario);
  compositor.layers.push(spriteLayer);

  const timer = new Timer(1 / 60);
  timer.update = function (deltaTime) {
    mario.update(deltaTime);
    compositor.draw(context);
    mario.velocity.y += gravity;
  };

  timer.start();
};

export default useSuperMarioCanvas;
