function getComputerSchoice()
{
    let choices = ["Rock" , "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    
    return choices[randomIndex];
}

function getPlayerSelection()
{
    return prompt("Rock, Paper, or Scissors");
}

function game(computerSelection, playerSelection)
{
    if(playerSelection == computerSelection )
    {
        console.log("Tie");
    }
    else if(playerSelection == "Rock" && computerSelection == "Paper")
    {
        console.log("You lost  :(");
        console.log("Computer's selection: " + computerSelection + " " + 
        "Player's Selection: " + playerSelection);
    }
    else if(playerSelection == "Rock" && computerSelection == "Scissor")
    {
        console.log("You win!  :)");
        console.log("Computer's selection: " + computerSelection + " " + 
        "Player's Selection: " + playerSelection);
    }
    else if(playerSelection == "Paper" && computerSelection == "Rock")
    {
        console.log("You win!  :)");
        console.log("Computer's selection: " + computerSelection + " " + 
        "Player's Selection: " + playerSelection);
    }
    else if(playerSelection == "Paper" && computerSelection == "Scissor")
    {
        console.log("You lose!  :(");
        console.log("Computer's selection: " + computerSelection + " " + 
        "Player's Selection: " + playerSelection);
    }
    else if(playerSelection == "Scissors" && computerSelection == "Rock")
    {
        console.log("You lose!  :(");
        console.log("Computer's selection: " + computerSelection + " " + 
        "Player's Selection: " + playerSelection);
    }
    else
    {
        console.log("You win!  :)");
        console.log("Computer's selection: " + computerSelection + " " + 
        "Player's Selection: " + playerSelection);
    }


}

let computerSelection = getComputerSchoice();

let playerSelection = getPlayerSelection();
game(computerSelection,playerSelection);
