document.getElementById('questionnaireForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        const averageScore = calculateAverageScore();
        showFinalMessage(averageScore);
        highlightQuestions();
    }
});

function validateForm() {
    let isValid = true;
    for (let i = 1; i <= 10; i++) {
        const question = document.querySelector(`input[name="q${i}"]:checked`);
        if (!question) {
            isValid = false;
            alert(`Please answer question ${i}`);
            break;
        }
    }
    return isValid;
}

function calculateAverageScore() {
    let totalScore = 0;
    for (let i = 1; i <= 10; i++) {
        const question = document.querySelector(`input[name="q${i}"]:checked`);
        if (question) {
            totalScore += parseInt(question.value, 10);
        }
    }
    return totalScore / 10;
}

function showFinalMessage(averageScore) {
    if (averageScore <= 2) {
        updateMessage('You seem to have good driving habits!');
    } else {
        updateMessage('You might want to reconsider your driving habits.');
    }
}

function highlightQuestions() {
    for (let i = 1; i <= 10; i++) {
        const question = document.querySelector(`input[name="q${i}"]:checked`);
        if (question && question.value === '1') {
            question.parentElement.parentElement.classList.add('highlight');
        }
    }
}

function updateMessage(message) {
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.innerText = message;
}