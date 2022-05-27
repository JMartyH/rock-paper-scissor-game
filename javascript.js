
let playerScore = 0;
let computerScore = 0;
let playerSelection;
const NUMBER_OF_ROUNDS = 5;



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

function startGame() {
    const btn = document.querySelectorAll('input');
    btn.forEach(button => {
        button.addEventListener('click', function (e) {
            playerSelection = e.target.name;
            console.log(playerSelection)
            game(playerSelection);
        })
    })
}

function endGame() {
    const resetBtn = document.createElement('input');
    const buttonContainer = document.querySelector('.button-container');
    const containerButtons = document.querySelector('#container-buttons');

    const btn = document.querySelectorAll('input');
    btn.forEach(button => {
        button.disabled = true;
    })

    resetBtn.name = 'reset';
    resetBtn.id = 'reset';
    resetBtn.type = 'button';
    resetBtn.value = 'RESET GAME!'



    resetBtn.addEventListener('click', () => {
        location.reload();
        startGame();
    });

    buttonContainer.insertBefore(resetBtn, containerButtons.nextSibling);

}

function game(playerSelection) {



    computerSelection = computerPlay();
    console.log(computerSelection);

    const textAreaResults = document.querySelector('#textarea-result');
    textAreaResults.setAttribute('style', 'text-align: left;');

    textAreaResults.append(playRound(playerSelection, computerSelection));
    textAreaResults.append(`\r\nPlayer score: ${playerScore} \r\nComputer score: ${computerScore}\r\n\r\n`);
    
    if ((playerScore === NUMBER_OF_ROUNDS) || (computerScore === NUMBER_OF_ROUNDS)) {
        textAreaResults.append(score(playerScore, computerScore));
        endGame();
    }
}

startGame();





