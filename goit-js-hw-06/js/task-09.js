function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const outputField = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  const randomHexColor = getRandomHexColor();
  outputField.innerText = randomHexColor;
  document.body.style.backgroundColor = randomHexColor;
});
