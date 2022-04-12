// computerPlay
// Generates a random number between 1 and 3
// Uses a switch statement to return what play was 
//  randomly selected
function computerPlay () {
    let comPlay = Math.floor(Math.random() * 3)+1;
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


// playerSelection
// Prompts user for a play and loops until user enters
//  a suitable play
// Returns play in lower case
function playerSelection(){
    const choices = ["rock","paper","scissors"];
    let userPlay;

    do {
        userPlay = prompt("Please enter your choice. Rock, Paper, or Scissors");
        if(userPlay === null) return null;
    } while (!choices.includes(userPlay.toLowerCase()));

    return userPlay.toLowerCase();

}

// playRound
// Takes the player and computer choice
// First checks for a tie
// If not a tie, then compares comp play to user play
//  via known loss combinations
// Returns win or lose respectively
function playRound(player, comp){
    if(player === null) {
        alert("You chose violence, so we will play for you");
        player = computerPlay();
    }
    console.log(`user: ${player}`);
    console.log(`comp: ${comp}`);
    const combos = {
        "rock" : "paper",
        "paper" : "scissors",
        "scissors" : "rock"
    }
    if (player === comp) return "tie";
    return (combos[player] === comp) ? "lose" : "win";
}


// game
// Sets player and computer score to 0 (zero)
// Loops through 5 game rounds and tracks scores
// Console logs the score for every round
// Returns a Win, Lose or Tie announcement
function game() {
    let playerScore = 0, compScore = 0;
    for(let i = 1; i <= 5; i++){
        let outcome = playRound(playerSelection(),computerPlay());
        if (outcome !== "tie") ( outcome === "win") ? playerScore++ : compScore++;
        console.log(`Round ${i} Scores
        User: ${playerScore}
        Computer: ${compScore}`);
    }
    return (playerScore > compScore) ? "You Win!" : (playerScore == compScore) ? "You Tied!" : "You Lose!";
}


// console logs the outcome of the game
//console.log(game());