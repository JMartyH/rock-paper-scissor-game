function computerPlay() {
    let rock = "Rock";
    let paper = "Paper";
    let scissor = "Scissor";
    let generateNum = Math.floor(Math.random() * 3);
    console.log(generateNum);

    if (generateNum == 0) {
        return rock;
    } else if (generateNum == 1) {
        return paper;
    } else if (generateNum == 2) {
        return scissor;
    }
}

function playRound(playerSelection, computerSelection) {
    const playerAction = playerSelection.toLowerCase();
    const computerAction = computerSelection.toLowerCase();
    if (playerAction == computerAction) {
        return "It's a tie! Both are " + playerAction + ".";
    } else if (playerAction == "rock" && computerAction == "paper") {
        return "You Lose! Paper beats Rock.";
    } else if (playerAction == "paper" && computerAction == "rock") {
        return "You Win! Paper beats Rock.";
    } else if (playerAction == "rock" && computerAction == "scissor") {
        return "You Win! Rock beats Scissor.";
    } else if (playerAction == "scissor" && computerAction == "rock") {
        return "You Lose! Rock beats Scissor.";
    } else if (playerAction == "paper" && computerAction == "scissor") {
        return "You Lose! Scissor beats paper.";
    } else if (playerAction == "scissor" && computerAction == "paper") {
        return "You Win! Scissor beats paper.";
    }
}
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

