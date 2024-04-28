const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

updateCurrentValue(input.value);

input.addEventListener("input", (event) => {
  updateCurrentValue(event.currentTarget.value);
});

function updateCurrentValue(fontSize) {
  text.style.fontSize = `${fontSize}px`;
}
