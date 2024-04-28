const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("Fill in all fields!!!");
    return;
  }

  const data = {
    [email.name]: email.value,
    [password.name]: password.value,
  };

  console.log(data);

  event.currentTarget.reset();
});
