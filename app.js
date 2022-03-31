function computerPlay () {
    let play = Math.floor(Math.random() * 3)+1;
    switch (play){
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

console.log(computerPlay());