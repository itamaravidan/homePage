document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('questionnaire-form');
    const saveButton = document.getElementById('save-insights-btn');

    saveButton.addEventListener('click', function () {
        // Collect all answers
        const answers = Array.from(form.querySelectorAll('input[type="radio"]:checked')).map(input => parseInt(input.value));

        // Check if all questions were answered
        if (answers.length < 10) {
            alert('Please answer all questions before proceeding.');
            return;
        }

        // Analyze the answers
        const insights = analyzeAnswers(answers);

        // Save the insights to localStorage
        localStorage.setItem('questionnaireInsights', insights);

        // Redirect to the insights page
        window.location.href = '../includes/questionnaireInsights.html'; // Update this path to the correct location of your insights page
    });
});

function analyzeAnswers(answers) {
    // Here you could add any logic to analyze the answers
    // For demonstration, we'll just count how many of each answer was chosen
    const scoreCounts = answers.reduce((counts, answer) => {
        counts[answer] = (counts[answer] || 0) + 1;
        return counts;
    }, {});

    // Generate insights based on scores
    let insights = "Your Distraction Level Insights:\n\n";
    if (scoreCounts[1] > 5) {
        insights += "You seem to be highly distracted while driving, which can be extremely dangerous. It is important to prioritize safety over phone use while on the road.\n";
    } else if (scoreCounts[5] > 5) {
        insights += "You appear to be very mindful of your driving and not easily distracted by your phone. Keep up the good work and continue to drive safely.\n";
    } else {
        insights += "Your answers suggest that you are somewhat aware of the dangers of phone use while driving, but there may still be room for improvement.\n";
    }

    return insights;
}
