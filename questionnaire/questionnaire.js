document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const modal = document.getElementById('insightsModal');
    const insightsText = document.getElementById('insightsText');
    const closeButton = document.querySelector('.close-button');
    
    closeButton.onclick = function() {
        modal.style.display = 'none';
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the form from submitting the traditional way
        
        // Collect all answers
        const answers = Array.from(form.querySelectorAll('input[type="radio"]:checked')).map(input => parseInt(input.value));
        
        // Check if all questions were answered
        if (answers.length < 10) {
            alert('Please answer all questions before submitting.');
            return;
        }
        
        // Analyze the answers
        const insights = analyzeAnswers(answers);
        
        // Display the insights in the modal
        insightsText.textContent = insights;
        modal.style.display = 'block';
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

    // You can add more complex analysis based on the combination of answers
    return insights;
}

function showInsightsPopup(insights) {
    const modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = `<h2>Your Insights</h2><p>${insights}</p>`;
    const modal = document.querySelector('.modal');
    modal.style.display = 'block';
}
