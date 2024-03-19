// Function to retrieve form history from local storage
function getFormHistory() {
    return JSON.parse(localStorage.getItem('formHistory')) || [];
}

// Function to display form history
function displayFormHistory() {
    const formHistory = getFormHistory();
    const formHistoryContainer = document.getElementById('formHistoryContainer');

    if (formHistory.length === 0) {
        formHistoryContainer.innerHTML = '<h3 class="no-history-message">There is no history.</h3>';
        return;
    }

    const historyHTML = formHistory.map(form => `
    <div class="form-entry">
       <p> your personal information: <p> 
      <p><strong>Name:</strong> ${form.firstName} ${form.lastName}</p>
      <p><strong>Age:</strong> ${form.age}</p>
      <p><strong>gender:</strong> ${form.gender}</p>
      <p> Your accident details:
      <p><strong>Location of Accident:</strong> ${form.location}</p>
      <p><strong>Was a phone the cause of the accident?:</strong> ${form.phoneCause}</p>
      <p><strong>Accident Date:</strong> ${form.accidentDate}</p>
      <p><strong>Accident Description:</strong> ${form.accidentDescription}</p>



    </div>
  `).join('');

    formHistoryContainer.innerHTML = historyHTML;
}

displayFormHistory();
