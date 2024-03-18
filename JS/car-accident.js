// Get the current date
var today = new Date();

// Format the date as YYYY-MM-DD (required by the date input)
var maxDate = today.toISOString().split('T')[0];

// Set the max attribute of the date input
document.getElementById('accidentDate').setAttribute('max', maxDate);

// Function to store form data in local storage
function storeFormData(formData) {
    const formHistory = getFormHistory();
    formHistory.push(formData);
    localStorage.setItem('formHistory', JSON.stringify(formHistory));
}

// Function to retrieve form history from local storage
function getFormHistory() {
    return JSON.parse(localStorage.getItem('formHistory')) || [];
}

// Function to validate form fields
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
    var fields = [firstName, lastName, age, gender, location, phoneCause, accidentDate, accidentDescription];
    fields.forEach(function(field) {
        if (!field.value.trim()) {
            field.style.borderColor = "red";
            isValid = false;
        } else {
            field.style.borderColor = "";
        }
    });

    return isValid;
}

// Function to open popup and store form data
function openPopup(formData) {
    storeFormData(formData);
    document.getElementById("confirmationPopup").style.display = "block";
    // Redirect user to form history page when OK button is clicked
    document.getElementById("popupButton").addEventListener("click", function() {
        window.location.href = "form-history.html";
    });
}

document.getElementById("accidentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
        openPopup({
            firstName: document.getElementById("firstName").value.trim(),
            lastName: document.getElementById("lastName").value.trim(),
            age: parseInt(document.getElementById("age").value),
            gender: document.getElementById("gender").value,
            location: document.getElementById("location").value.trim(),
            phoneCause: document.getElementById("phoneCause").value,
            accidentDate: document.getElementById("accidentDate").value,
            accidentDescription: document.getElementById("accidentDescription").value.trim()
        });
    }
});