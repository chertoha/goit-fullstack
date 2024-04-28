const boxes = document.querySelector("#boxes");
const input = document.querySelector('#controls > input[type="number"]');
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", () => {
  const boxesQuantity = input.value;
  createBoxes(boxesQuantity);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const divCollection = [];
  for (let i = 0, size = 30; i < amount; i += 1, size += 10) {
    const div = document.createElement("div");

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();

    divCollection.push(div);
  }
  boxes.append(...divCollection);
}

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
