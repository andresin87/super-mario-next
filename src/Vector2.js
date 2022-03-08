class Vector2 {
  #x;
  #y;
  constructor(x, y) {
    this.set(x, y);
  }
  get x() {
    return this.#x;
  }
  set x(x) {
    this.#x = x;
  }
  get y() {
    return this.#y;
  }
  set y(y) {
    this.#y = y;
  }

  set(x, y) {
    this.#x = x;
    this.#y = y;
  }
}
export default Vector2;
