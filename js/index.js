/* ================== Variables ======================== */
const body = document.querySelector("body");
const form = document.querySelector("form");
let emailInput = document.getElementById("email");
const formMessage = document.getElementById("form-message");
const formSuccess = document.getElementById("form-success");
const dismissBtn = document.getElementById("dismiss-btn");
const userEmail = document.getElementById("user-email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (emailInput.value === "") {
    formMessage.textContent = "Please enter your email address.";
  } else if (
    !emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    formMessage.textContent = "Valid email required";
  } else {
    body.classList.add("success");

    dismissBtn.addEventListener("click", () => {
      body.classList.remove("success");
    });

    formMessage.textContent = "";
    userEmail.textContent = emailInput.value;
    emailInput.value = "";
  }
});
