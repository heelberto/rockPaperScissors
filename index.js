function getComputerSchoice()
{
    let choices = ["Rock" , "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    
    return choices[randomIndex];
}

let compScore = 0;
let playerScore = 0;

function getPlayerSelection()
{
    return "Rock";
}


const body = document.body;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissors");

rockBtn.onclick = function(){
    console.log(game("Rock"))
};

paperBtn.onclick = function(){
    console.log(game("Paper"))
};

scissorBtn.onclick = function(){
    console.log(game("Scissors"))
};

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
        /*const p = document.createElement("p")
        p.innerText("Computer's selection: " + computerSelection + " " + 
        "Player's Selection: " + playerSelection)
        body.append(p);*/
        compScore++;
        return "You lost  :(";
    }
    else if(playerSelection == "Rock" && computerSelection == "Scissors")
    {
        const p = document.createElement("p")
        const scores = document.createElement("p");
        p.innerText = "Computer's selection: " + computerSelection + "  |||||  " + "Player's Selection: " + playerSelection;
        scores.innerText = "Computer's score: " + compScore + "            ||||   Player's score: " + playerScore
        body.append(p);
        playerScore++;
        body.append(scores);
        return "You won  :)";
    }
    else if(playerSelection == "Paper" && computerSelection == "Rock")
    {
        //console.log("You win!  :)");
        console.log("Computer's selection: " + computerSelection + " " + 
        "Player's Selection: " + playerSelection);
        playerScore++;
        return "You won  :)";
    }
    else if(playerSelection == "Paper" && computerSelection == "Scissors")
    {
        //console.log("You lose!  :(");
        console.log("Computer's selection: " + computerSelection + " " + 
        "Player's Selection: " + playerSelection);
        compScore++;
        return "You lost  :(";
    }
    else if(playerSelection == "Scissors" && computerSelection == "Rock")
    {
        //console.log("You lose!  :(");
        console.log("Computer's selection: " + computerSelection + " " + 
        "Player's Selection: " + playerSelection);
        compScore++;
        return "You lost  :(";
    }
    else
    {
        //console.log("You win!  :)");
        console.log("Computer's selection: " + computerSelection + " " + 
        "Player's Selection: " + playerSelection);
        playerScore++;
        return "You won  :)";
    }


}


function game(_playerSelection)
{   
    
    
    let computerSelection = getComputerSchoice();
    let playerSelection = _playerSelection;
    console.log(playRound(computerSelection,playerSelection));
    console.log("Player Score: " + playerScore + " Computer's Score: " + compScore)
    console.log("~~~~~~~~~~~~~~~~~~~~~")
    //count--;
    
}