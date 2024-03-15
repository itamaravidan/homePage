
// Get the current date
var today = new Date();

// Format the date as YYYY-MM-DD (required by the date input)
var maxDate = today.toISOString().split('T')[0];

// Set the max attribute of the date input
document.getElementById('accidentDate').setAttribute('max', maxDate);


function validateForm() {
  // Retrieve form fields
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var age = document.getElementById("age");
  var gender = document.getElementById("gender");

  var location = document.getElementById("location");
  var phoneCause = document.getElementById("phoneCause");
  var accidentDate = document.getElementById("accidentDate");
  var accidentDescription = document.getElementById("accidentDescription");

  // Check if fields are empty
  var isValid = true;
  if (!firstName.value.trim()) {
    firstName.style.borderColor = "red";
    isValid = false;
  } else {
    firstName.style.borderColor = "";
  }
  if (!lastName.value.trim()) {
    lastName.style.borderColor = "red";
    isValid = false;
  } else {
    lastName.style.borderColor = "";
  }
  if (!age.value) {
    age.style.borderColor = "red";
    isValid = false;
  } else {
    age.style.borderColor = "";
  }
  if (gender.value === "") {
    gender.style.borderColor = "red";
    isValid = false;
  } else {
    gender.style.gender = "";
  }
  if (!location.value.trim()) {
    location.style.borderColor = "red";
    isValid = false;
  } else {
    location.style.borderColor = "";
  }
  if (phoneCause.value === "") {
    phoneCause.style.borderColor = "red";
    isValid = false;
  } else {
    phoneCause.style.borderColor = "";
  }
  if (!accidentDate.value) {
    accidentDate.style.borderColor = "red";
    isValid = false;
  } else {
    accidentDate.style.borderColor = "";
  }
  if (!accidentDescription.value.trim()) {
    accidentDescription.style.borderColor = "red";
    isValid = false;
  } else {
    accidentDescription.style.borderColor = "";
  }


  return isValid;
}

function openPopup() {
  document.getElementById("confirmationPopup").style.display = "block";
}


document.getElementById("accidentForm").addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateForm()) {
    openPopup();

  }
});


