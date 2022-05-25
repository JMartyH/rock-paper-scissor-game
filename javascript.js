
let playerScore = 0;
let computerScore = 0;
let playerSelection;

function computerPlay() {
    let rock = "rock";
    let paper = "paper";
    let scissor = "scissor";
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
        playerScore++;
        computerScore++;
        return "It's a tie! Both are " + playerAction + ".";
    } else if (playerAction == "rock" && computerAction == "paper") {
        computerScore++;
        return "You Lose! Paper beats Rock.";
    } else if (playerAction == "paper" && computerAction == "rock") {
        playerScore++;
        return "You Win! Paper beats Rock.";
    } else if (playerAction == "rock" && computerAction == "scissor") {
        playerScore++;
        return "You Win! Rock beats Scissor.";
    } else if (playerAction == "scissor" && computerAction == "rock") {
        computerScore++;
        return "You Lose! Rock beats Scissor.";
    } else if (playerAction == "paper" && computerAction == "scissor") {
        computerScore++;
        return "You Lose! Scissor beats paper.";
    } else if (playerAction == "scissor" && computerAction == "paper") {
        playerScore++;
        return "You Win! Scissor beats paper.";
    }
}

function score(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return "Player Won!";
    } else if (playerScore == computerScore) {
        return " It's a Tie!";
    } else
        return "Computer Won!";

}



function game(playerSelection) {
    
        computerSelection = computerPlay();
        console.log(computerSelection);
 
        
        
        

        

        console.log(playRound(playerSelection, computerSelection));



    console.log(`Player score ${playerScore}`);
    console.log(`Computer score ${computerScore}`);
    
    if((playerScore === 5) || (computerScore === 5)){
        console.log(score(playerScore, computerScore));
        return;
    }
    
}
const btn = document.querySelectorAll('button');
btn.forEach(button => {
    button.addEventListener('click', function(e){
        playerSelection = e.target.outerText;
        console.log(playerSelection)
        game(playerSelection);
    })
})

