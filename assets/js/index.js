const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", () => {
  const nameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("emailAddress");
  const addressInput = document.getElementById("fullAddress");
  const formData = document.getElementById("form-data");
  const nameValue = nameInput.value;
  const emaileValue = emailInput.value;
  const addressValue = addressInput.value;
  const errorData = document.getElementById("error-data");
  if (nameValue && emaileValue && addressValue) {
    formData.innerHTML = `<p>Form submited By : ${nameValue}, Email Address : ${emaileValue}, Address : ${addressValue}</p>`;
    errorData.innerHTML = "";
    nameInput.value = "";
    emailInput.value = "";
    addressInput.value = "";
  } else {
    errorData.innerHTML = '<p class="text-warning">Please Fill Up The Form</p>';
    formData.innerHTML = "";
  }
});
