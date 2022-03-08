class Compositor {
  #layers = [];

  // constructor() {}

  get layers() {
    return this.#layers;
  }

  draw(context) {
    this.#layers.forEach((layer) => {
      layer(context);
    });
  }
}

export default Compositor;
