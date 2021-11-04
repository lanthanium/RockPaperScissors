
function computerPlay()
{
    let decision = Math.floor(Math.random()*3);
    if (decision == 0) return "Rock";
    else if (decision == 1) return "Paper";
    else return "Scissors";
}

function playRound(playerSelection, computerSelection) //returns 0 if tie, 1 if player wins, 2 if player loses
{
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock")
    {
        if (computerSelection == "Rock")
        {
            console.log("Tie game!");
           return 0; 
        } 
        else if (computerSelection == "Paper") 
        {
            console.log("You lose. Paper wraps rock");
            return 2;
        }
        else
        {
            console.log("You win! Rock crushes scissors");
            return 1; 
        }
    }
    else if (playerSelection == "paper")
    {
        if (computerSelection == "Rock")
        {
            console.log("You win! Paper wraps rock");
           return 1; 
        } 
        else if (computerSelection == "Paper") 
        {
            console.log("Tie game! You both chose Paper");
            return 0;
        }
        else
        {
            console.log("You lose. Scissor cuts paper");
            return 2; 
        }
    }
    else
    {
        if (computerSelection == "Rock")
        {
            console.log("You lose. Rock crushes scissors");
           return 2; 
        } 
        else if (computerSelection == "Paper") 
        {
            console.log("You win! Scissor cuts paper");
            return 1;
        }
        else
        {
            console.log("Tie. Scissors cancel");
            return 0; 
        }
    }

}


function game()
{
    let playerScore = 0;
    let computerScore = 0;
    for (let round = 0; round < 5; round++)
    {
        let playerSelection = prompt("Rock, paper or scissors?");
        let computerSelection = computerPlay();
        let outcome = playRound(playerSelection, computerSelection);
        if (outcome == 1) playerScore++;
        else if (outcome == 2) computerScore++;
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
    }
    if (playerScore == computerScore) console.log("Tied match!");
    if (playerScore == 3) console.log("You win the match!");
    if (computerScore == 3) console.log("The computer won the match");
    
}

/*
get input from user
get computer input by calling computerplay function
initialzie playerselection with that input and computerselection with pc input
pass these values into playround function
if i win, increase myTally by 1
if pc win, increase pctally by 1
after 5 rounds, compare who has the highest tally */