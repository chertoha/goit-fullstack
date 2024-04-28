class Counter {
  #counterValue;
  #valueRef;
  constructor({ decrement, increment, value } = {}) {
    if (!decrement || !increment || !value) {
      console.error("Wrong config object data!");
      return;
    }

    const valueRef = document.querySelector(value);
    const decrementRef = document.querySelector(decrement);
    const incrementRef = document.querySelector(increment);

    this.#counterValue = 0;
    this.#valueRef = valueRef;

    decrementRef.addEventListener("click", this.#decrementHandler.bind(this));
    incrementRef.addEventListener("click", this.#incrementHandler.bind(this));
  }

  #updateCounterValue() {
    this.#valueRef.innerText = this.#counterValue;
  }

  #decrementHandler() {
    this.#counterValue -= 1;
    this.#updateCounterValue();
  }
  #incrementHandler() {
    this.#counterValue += 1;
    this.#updateCounterValue();
  }
}

//Create new object with class Counter. Use config object with css selectors like an argument.
new Counter({
  decrement: '[data-action="decrement"]',
  increment: '[data-action="increment"]',
  value: "#value",
});
