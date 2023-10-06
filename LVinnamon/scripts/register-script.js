const submitButton = document.querySelector(".submit-button");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (!validateName()) return;
  if (!validateRegion()) return;
  if (!validatePhoneNumber()) return;
  if (!validateEmail()) return;
  if (!validatePassword()) return;
  if (!validateCheckbox()) return;

  alert("You have successfully registered!");

  form.reset();
});

function validateName() {
  const nameInput = document.querySelector("#name");
  if (nameInput.value.trim() === "") {
    alert("Please enter your name");
    return false;
  }
  return true;
}

function validateRegion() {
  const regionInput = document.querySelector("#region");
  if (regionInput.value === "") {
    alert("Please select a region");
    return false;
  }
  return true;
}

function validatePhoneNumber() {
  const phoneNumberInput = document.querySelector("#PhoneNumber");
  if (isNaN(phoneNumberInput.value) || phoneNumberInput.value.length != 12) {
    alert("Please enter a valid phone number");
    return false;
  }
  return true;
}

function validateEmail() {
  const emailInput = document.querySelector("#Email");
  const emailParts = emailInput.value.split("@");
  if (emailParts.length !== 2 || emailParts[1] !== "gmail.com") {
    alert("Please enter a valid Gmail address");
    return false;
  }
  return true;
}

function validatePassword() {
  const passwordInput = document.querySelector("#password");
  const repasswordInput = document.querySelector("#Repassword");
  if (passwordInput.value.trim() === "") {
    alert("Please enter your password");
    return false;
  }
  if (repasswordInput.value.trim() === "") {
    alert("Please confirm your password");
    return false;
  }
  if (passwordInput.value !== repasswordInput.value) {
    alert("Passwords do not match");
    return false;
  }
  return true;
}

function validateCheckbox() {
  const checkboxInput = document.querySelector("#checkbox");
  if (!checkboxInput.checked) {
    alert("Please agree to the terms and conditions");
    return false;
  }
  return true;
}
