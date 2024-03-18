
window.onload = function() {
    const totalTime = parseInt(localStorage.getItem('totalTime')) || 0;
    const totalGuesses = parseInt(localStorage.getItem('totalGuesses')) || 0;
    const gamesPlayed = parseInt(localStorage.getItem('gamesPlayed')) || 0;
    const fastestWin = parseInt(localStorage.getItem('fastestWin'));
    const longestGame = parseInt(localStorage.getItem('longestGame'));

    const avgTime = gamesPlayed > 0 ? (totalTime / gamesPlayed).toFixed(2) : 'No data';
    const avgGuesses = gamesPlayed > 0 ? (totalGuesses / gamesPlayed).toFixed(2) : 'No data';

    document.getElementById('averageTime').textContent = avgTime + ' seconds';
    document.getElementById('averageGuesses').textContent = avgGuesses;
    document.getElementById('gamesPlayed').textContent = gamesPlayed;
    document.getElementById('fastestWin').textContent = fastestWin ? fastestWin + ' seconds' : 'No data';
    document.getElementById('longestGame').textContent = longestGame ? longestGame + ' seconds' : 'No data';

    const insightTime = document.getElementById('insightTime');
    const insightGuesses = document.getElementById('insightGuesses');
    const insightStreak = document.getElementById('insightStreak');

    if (gamesPlayed > 0) {
        insightTime.textContent = `Your quickest victory was in ${fastestWin} seconds. Can you beat that record?`;
        insightGuesses.textContent = `On average you guess the word in ${avgGuesses} attempts. Aim for fewer next time!`;
        insightStreak.textContent = `You've played ${gamesPlayed} games. Time to go on a winning streak!`;
    } else {
        insightTime.textContent = `Play a game to start gathering insights!`;
        insightGuesses.textContent = `Guessing insights will be shown here after you play some games.`;
        insightStreak.textContent = `Your winning streak will be tracked once you start playing.`;
    }
};