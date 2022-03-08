class SpriteSheet {
  #image;
  #width;
  #height;
  #tiles = new Map();

  constructor(image, width, height) {
    this.#image = image;
    this.#width = width;
    this.#height = height;
  }

  define(name, x, y, width = this.#width, height = this.#height) {
    const buffer = document.createElement("canvas");
    buffer.width = width;
    buffer.height = height;
    buffer
      .getContext("2d")
      .drawImage(this.#image, x, y, width, height, 0, 0, width, height);
    this.#tiles.set(name, buffer);
  }

  defineTile(name, x, y) {
    this.define(
      name,
      x * this.#width,
      y * this.#height,
      this.#width,
      this.#height
    );
  }

  draw(name, context, x, y) {
    const buffer = this.#tiles.get(name);
    context.drawImage(buffer, x, y);
  }

  drawTile(name, context, x, y) {
    this.draw(name, context, x * this.#width, y * this.#height);
  }
}

export default SpriteSheet;
