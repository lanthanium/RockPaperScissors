function computerPlay()
{
    let decision = Math.floor(Math.random()*3);
    if (decision == 0) return "Rock";
    else if (decision == 1) return "Paper";
    else return "Scissors";
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection == "Rock")
    {
        if (computerSelection == "Rock")
        {
            promptDisplay.textContent = "Tie. You both chose Rock";
            
           
        } 
        else if (computerSelection == "Paper") 
        {
            computerScore++;
           
            promptDisplay.textContent = "You lose this round. Paper wraps rock";
          
        }
        else
        {
            
            playerScore++;
            promptDisplay.textContent = "You win this round.  Rock crushes scissors.";
            
        }
    }
    else if (playerSelection == "Paper")
    {
        if (computerSelection == "Rock")
        {
            playerScore++;
            
            promptDisplay.textContent="You win this round. Paper wraps rock";
           
        } 
        else if (computerSelection == "Paper") 
        {
            promptDisplay.textContent="Tie. You both chose Paper";
           
            
        }
        else
        {
            computerScore++;
          
            promptDisplay.textContent="You lose this round. Scissor cuts paper";
           
        }
    }
    else
    {
        if (computerSelection == "Rock")
        {
            computerScore++;  
            promptDisplay.textContent="You lose this round. Rock crushes scissors";
          
        } 
        else if (computerSelection == "Paper") 
        {
            playerScore++;
            promptDisplay.textContent="You win this round. Scissor cuts paper";
           
        }
        else
        {
         
            promptDisplay.textContent="Tie. You both chose scissors";
            
        }
    }

    userScoreDisplay.textContent = "User Score: " + playerScore;
    computerScoreDisplay.textContent = "Computer Score: " + computerScore;
    userOutput.textContent = playerSelection;
    pcOutput.textContent = computerSelection;
    if (playerScore == 5)
    {
        promptDisplay.textContent = "You win the match! Make another selection to start another match or press Reset.";
        playerScore = 0;
        computerScore = 0;  
    }
    else if (computerScore == 5)
    {
        promptDisplay.textContent = "The computer won the match. Make another selection to start another match or press Reset.";
        playerScore = 0;
        computerScore = 0;
    }
    
}


let playerScore = 0;
let computerScore = 0;

let playerSelection = "";
let computerSelection = "";    


let userScoreDisplay = document.querySelector('.user');
userScoreDisplay.textContent = "User Score: " + playerScore;

let computerScoreDisplay = document.querySelector('.computer');
computerScoreDisplay.textContent = "Computer Score: " + computerScore;

let promptDisplay = document.querySelector('.results');
promptDisplay.textContent = "Let's play Rock Paper Scissors. First to 5 wins! Click the buttons above!";

let pcChoice = document.querySelector('.pcChoice');
let userChoice = document.querySelector('.userChoice');

let userOutput = document.querySelector('.userOutput');
let pcOutput = document.querySelector('.pcOutput');


const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click', () => {
    playerSelection = "Rock";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
})

const paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click', () => {
    playerSelection = "Paper";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
})

const scissorBtn = document.querySelector('.scissors');
scissorBtn.addEventListener('click', () => {
    playerSelection = "Scissors";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
})


const resetBtn = document.querySelector('.buttonReset');
resetBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerSelection = "";
    computerSelection = "";  
    userScoreDisplay.textContent = "User Score: " + playerScore;
    computerScoreDisplay.textContent = "Computer Score: " + computerScore;
    userOutput.textContent = playerSelection;
    pcOutput.textContent = computerSelection;
    promptDisplay.textContent = "Let's play Rock Paper Scissors. First to 5 wins! Click the buttons above!";
})

//commentin