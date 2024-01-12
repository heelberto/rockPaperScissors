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

function playRound(computerSelection, playerSelection)
{
    if(playerSelection == computerSelection )
    {
        //console.log("Tie");
        return "Tie";
    }
    else if(playerSelection == "Rock" && computerSelection == "Paper")
    {
        //console.log("You lost  :(");
        console.log("Computer's selection: " + computerSelection + " " + 
        "Player's Selection: " + playerSelection);
        return "You lost  :(";
    }
    else if(playerSelection == "Rock" && computerSelection == "Scissor")
    {
        //console.log("You win!  :)");
        console.log("Computer's selection: " + computerSelection + " " + 
        "Player's Selection: " + playerSelection);
        return "You won  :)";
    }
    else if(playerSelection == "Paper" && computerSelection == "Rock")
    {
        //console.log("You win!  :)");
        console.log("Computer's selection: " + computerSelection + " " + 
        "Player's Selection: " + playerSelection);
        return "You won  :)";
    }
    else if(playerSelection == "Paper" && computerSelection == "Scissor")
    {
        //console.log("You lose!  :(");
        console.log("Computer's selection: " + computerSelection + " " + 
        "Player's Selection: " + playerSelection);
        return "You lost  :(";
    }
    else if(playerSelection == "Scissors" && computerSelection == "Rock")
    {
        //console.log("You lose!  :(");
        console.log("Computer's selection: " + computerSelection + " " + 
        "Player's Selection: " + playerSelection);
        return "You lost  :(";
    }
    else
    {
        //console.log("You win!  :)");
        console.log("Computer's selection: " + computerSelection + " " + 
        "Player's Selection: " + playerSelection);
        return "You won  :)";
    }


}

function game()
{   
    
    let count = 10;
    while(count > 0)
    {
        let computerSelection = getComputerSchoice();
        let playerSelection = getPlayerSelection();
        console.log(playRound(computerSelection,playerSelection));
        count--;
    }
}


console.log(game());
