const form = document.querySelector("form");
const email = form.querySelector("div #exampleInputEmail1");
const password = form.querySelector("div #exampleInputPassword1");

form.addEventListener("submit", formHandler);

function formHandler(e) {
  e.preventDefault();

  const formInfo = {
    email: email.value,
    password: password.value,
  };
  console.log(formInfo);
  email.value = "";
  password.value = "";
}
