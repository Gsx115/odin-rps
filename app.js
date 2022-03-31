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
    } while (!choices.includes(userPlay));
    
    return userPlay.toLowerCase();

}

console.log(computerPlay());
console.log(`user: ${playerSelection()}`);