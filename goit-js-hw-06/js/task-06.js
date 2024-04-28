const input = document.querySelector("#validation-input");

input.addEventListener("blur", ({ currentTarget: ref }) => {
  const maxInputLength = Number(ref.dataset.length);
  const currentInputLength = Number(ref.value.length);

  const isLengthValid = maxInputLength === currentInputLength;

  if (isLengthValid) {
    ref.classList.remove("invalid");
    ref.classList.add("valid");
  } else {
    ref.classList.remove("valid");
    ref.classList.add("invalid");
  }
});
