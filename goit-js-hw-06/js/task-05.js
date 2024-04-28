const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  let inputText = event.currentTarget.value;
  output.innerText = inputText !== "" ? inputText : "Anonymous";
});
