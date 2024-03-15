// Word bank associated with car accidents
const wordBank = ["CRASH", "BRAKE", "PHONE", "WRECK"];
let solution = wordBank[Math.floor(Math.random() * wordBank.length)]; // Randomly select a solution

const guesses = [];
const maxGuesses = 6;
let timerInterval;
let gameTime = 0;
let totalTime = parseInt(localStorage.getItem('totalTime')) || 0;
let gamesPlayed = parseInt(localStorage.getItem('gamesPlayed')) || 0;
let totalGuesses = parseInt(localStorage.getItem('totalGuesses')) || 0;
// Initialize or retrieve the fastest win and longest game times
let fastestWin = parseInt(localStorage.getItem('fastestWin')) || Infinity;
let longestGame = parseInt(localStorage.getItem('longestGame')) || 0;

function createGameBoard() {
    const gameElement = document.getElementById('game');
    gameElement.innerHTML = ''; // Clear previous game board
    for (let i = 0; i < maxGuesses; i++) {
        for (let j = 0; j < 5; j++) {
            const tile = document.createElement('div');
            gameElement.appendChild(tile);
        }
    }
    startTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        gameTime++;
        document.getElementById('timer').textContent = `Time: ${gameTime} seconds`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    if (gameTime > 0) { // Only update stats if the game was played
        totalTime += gameTime;
        gamesPlayed++;
        localStorage.setItem('totalTime', totalTime);
        localStorage.setItem('gamesPlayed', gamesPlayed);
    }
    gameTime = 0;
}

function submitGuess() {
    const input = document.getElementById('guessInput').value.toUpperCase();
    if (input.length !== 5) {
        alert("Guess must be 5 letters.");
        return;
    }

    guesses.push(input);
    if (guesses.length > maxGuesses) {
        alert("Max guesses reached. The word was " + solution + ". Refresh to play again.");
        if (gameTime > longestGame) {
            longestGame = gameTime; // Update if this game took longer than any previous game
            localStorage.setItem('longestGame', longestGame);
        }
        stopTimer();
        alert("You lose!");
        resetGame();
        return;
    }

    updateGameBoard();

    if (input === solution) {
        if (gameTime < fastestWin || fastestWin === Infinity) { // Check if it's the fastest win
            fastestWin = gameTime;
            localStorage.setItem('fastestWin', fastestWin);
        }
        setTimeout(() => {
            alert("Congratulations!");
            stopTimer();
            resetGame();
        }, 100);
    } else if (guesses.length === maxGuesses) {
        setTimeout(() => {
            if (gameTime > longestGame) {
                longestGame = gameTime; // Update if this game took longer than any previous game
                localStorage.setItem('longestGame', longestGame);
            }
            alert("You lose! The word was " + solution + ". Refresh to play again.");
            stopTimer();
            resetGame();
        }, 100);
    }

    document.getElementById('guessInput').value = ''; // Clear input field after each guess
}

function updateGameBoard() {
    const tiles = document.querySelectorAll('#game div');
    let tileIndex = guesses.length * 5 - 5;

    for (let i = 0; i < 5; i++) {
        const letter = guesses[guesses.length - 1][i];
        tiles[tileIndex].textContent = letter;
        tiles[tileIndex].classList.remove('correct', 'present', 'absent'); // Reset classes
        if (solution[i] === letter) {
            tiles[tileIndex].classList.add('correct');
        } else if (solution.includes(letter)) {
            tiles[tileIndex].classList.add('present');
        } else {
            tiles[tileIndex].classList.add('absent');
        }
        tileIndex++;
    }
}

function showStats() {
    const avgTime = gamesPlayed > 0 ? (totalTime / gamesPlayed).toFixed(2) : 0;
    const avgGuesses = gamesPlayed > 0 ? (totalGuesses / gamesPlayed).toFixed(2) : 0;
    const statsUrl = `stats.html?time=${avgTime}&guesses=${avgGuesses}`;
    window.open(statsUrl, 'Player Stats', 'width=400,height=300');
}

function resetGame() {
    solution = wordBank[Math.floor(Math.random() * wordBank.length)]; // Select a new word for next game
    createGameBoard(); // Reset the board for a new game
    if (guesses.length > 0) {
        totalGuesses += guesses.length; // Update total guesses
        localStorage.setItem('totalGuesses', totalGuesses);
    }
    guesses.length = 0; // Reset guesses for the new game
}

createGameBoard();
