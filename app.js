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

console.log(playRound(playerSelection(),computerPlay()));