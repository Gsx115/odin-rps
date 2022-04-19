// Const Element Variable Initialize
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const output = document.querySelector('#result');
const start = document.querySelector('#start-game');
const moves = document.querySelector('#move-container');
const end = document.querySelector('#end-container');
const playAgain = document.querySelector('#play-again');
const scoreBoard = document.querySelector('.subtitle');

// Score keeping variables
let playerScore = 0, compScore = 0;

// Star game button - Click event
start.addEventListener('click',()=>{
    // Toggle show/hide for button divs
    start.classList.toggle('hide');
    moves.classList.toggle('hide');
    
    newGame();  // New Game function call

    // Click Event Listeners for user move selection
    rock.addEventListener('click',()=>{
        playRound('rock',computerPlay());
    });

    paper.addEventListener('click',()=>{
        playRound('paper',computerPlay());
    });

    scissors.addEventListener('click',()=>{
        playRound('scissors',computerPlay());
    });
})

// Play again button - Click event
playAgain.addEventListener('click',()=>{
    // Toggle show/hide for button divs
    end.classList.toggle('hide');
    moves.classList.toggle('hide');

    newGame(); // New Game function call
});

// displayOutput
// Selects output message based on result of game
function displayOutput (){
    let result = 'Humans lose.  MCP Wins.'
    if(playerScore === compScore) result = 'No winner was decided today';
    else if (playerScore > compScore) result = 'Tron defeats MCP'
    output.textContent = result;
}

// computerPlay
// Generates a random number between 1 and 3
// Uses a switch statement to return what play was 
//  randomly selected
function computerPlay () {
    let comPlay = Math.floor(Math.random() * 3+1);
    switch (comPlay){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            console.log("Severe Issues");
            break;
    }
}

// playRound
// Takes the player and computer choice
// First checks for a tie
// If not a tie, then compares comp play to user play
//  via known loss combinations
// Returns win or lose respectively
function playRound(player, comp){
    clearAura();  // Clear auras from previous round
    
    setAura(player,comp); // Sets new move auras

    // Win/lose move combinations
    const combos = {
        "rock" : "paper",
        "paper" : "scissors",
        "scissors" : "rock"
    }

    if (player === comp) return;  // Tie check
    (combos[player] === comp) ? ++compScore : ++playerScore; // Increment score

    if(compScore === 5 || playerScore === 5) endGame();  // First to 5 ends game

    // function call to update scoreboard
    updateScores();
}

// updateScores
// Change content of scoreboard by updating the HTML attributes
function updateScores(){
    scoreBoard.setAttribute('player-score',playerScore);
    scoreBoard.setAttribute('comp-score',compScore);
}

// clearAura
// Loops through all move elements to remove all aura css
function clearAura(){
    let elements = [rock, paper, scissors];
    elements.forEach((choice)=>{
        choice.classList.remove('user-choice');
        choice.classList.remove('comp-choice');
        choice.classList.remove('tied');
    });
}

// setAura
// Takes player and comp choice and gets correlated element
// Assigns proper aura to move choice
function setAura(player, comp){
    const element = {
        "rock":rock,
        "paper":paper,
        "scissors":scissors
    }
    if (player === comp){
        element[player].classList.toggle('tied');
        return;
    }
    element[player].classList.toggle('user-choice');
    element[comp].classList.toggle('comp-choice');
}

// newGame
// Sets scores to 0
// Updates scoreboard
// Clears all move auras
function newGame() {
    playerScore = 0;
    compScore = 0;
    updateScores();
    clearAura();
}

// endGame
// Hides moves
// Shows end game div
// calls displayOutput function
function endGame() {
    end.classList.toggle('hide');
    moves.classList.toggle('hide');
    displayOutput();
}