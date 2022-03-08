import SpriteSheet from "./SpriteSheet.js";
import { loadImage, loadLevel } from "./loaders.js";

const drawBackground = (background, context, sprites) => {
  background.ranges.forEach(([x1, x2, y1, y2]) => {
    for (let x = x1; x < x2; ++x) {
      for (let y = y1; y < y2; ++y) {
        sprites.drawTile(background.tile, context, x, y);
      }
    }
  });
};

const useSuperMarioCanvas = async (node) => {
  if (!node) return null;
  const context = node.getContext("2d");

  const image = await loadImage("/img/tiles.jpg");
  const sprites = new SpriteSheet(image, 16, 16);
  sprites.define("ground", 0, 0);
  sprites.define("sky", 3, 23);

  const level = await loadLevel("1-1");
  console.log(level);
  level.backgrounds.forEach((background) => {
    drawBackground(background, context, sprites);
  });
};

export default useSuperMarioCanvas;
