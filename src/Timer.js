class Timer {
  #deltaTime = 0;
  #accumulatedTime = 0;
  #lastTime = 0;

  constructor(deltaTime = 1 / 60) {
    this.#deltaTime = deltaTime;
  }

  get deltaTime() {
    return this.#deltaTime;
  }

  get accumulatedTime() {
    return this.#accumulatedTime;
  }
  set accumulatedTime(accumulatedTime) {
    this.#accumulatedTime = accumulatedTime;
  }
  get lastTime() {
    return this.#lastTime;
  }
  set lastTime(lastTime) {
    this.#lastTime = lastTime;
  }

  #update(time) {
    this.accumulatedTime = (time - this.lastTime) / 1000;
    while (this.accumulatedTime > this.deltaTime) {
      this.update(this.deltaTime);
      this.accumulatedTime -= this.deltaTime;
    }
    this.lastTime = time;
    this.enqueue();
  }

  start() {
    this.enqueue();
  }

  enqueue() {
    requestAnimationFrame(this.#update.bind(this, performance.now()));
  }
}

export default Timer;
