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

function playerSelection(){
    const choices = ["rock","paper","scissors"];
    let userPlay;

    do {
        userPlay = prompt("Please enter your choice. Rock, Paper, or Scissors");
    } while (!choices.includes(userPlay.toLowerCase()));

    return userPlay.toLowerCase();

}

function playRound(player, comp){
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
console.log(game());