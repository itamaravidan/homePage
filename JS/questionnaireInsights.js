document.addEventListener('DOMContentLoaded', function() {
    const insightsContent = document.getElementById('insights-content');
    const insights = localStorage.getItem('questionnaireInsights');
    
    if (insights) {
        insightsContent.textContent = insights;
    } else {
        insightsContent.textContent = 'No insights available. Please complete the questionnaire.';
    }
});
