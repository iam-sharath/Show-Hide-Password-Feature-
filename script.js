const password = document.getElementById("password");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", manageToggle);

function manageToggle() {
  const type =
    password.value.length > 0
      ? (password.getAttribute("type") === "password" ? "text": "password")
      : "password";

  password.setAttribute("type", type);
  toggle.textContent =
    password.value.length > 0 
      ? (type === "password" ? "show" : "Hide")
      : "show";
  
}

const submit = document.getElementById("submit");
submit.addEventListener("click", handleSubmit);
function handleSubmit() {
  if (password.value) {
    console.log(password.value);
    password.value = "";
  }
}
