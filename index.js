let compScore = 0;
let playerScore = 0;

function updatePlayerScore()
{
    const scoreElement = document.getElementById('playerScore');

    playerScore++;

    scoreElement.textContent = playerScore;
}

function updateCompScore()
{
    const scoreElement = document.getElementById('compScore');

    compScore++;

    scoreElement.textContent = compScore;
}

function getComputerSchoice()
{
    let choices = ["Rock" , "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    
    return choices[randomIndex];
}






const body = document.body;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissors");

let playerChoice = "";

rockBtn.onclick = function(){
    playerChoice = "Rock";
    game();
    //console.log(game("Rock"))
};

paperBtn.onclick = function(){
    playerChoice = "Paper";
    game();
    //console.log(game("Paper"))
};

scissorBtn.onclick = function(){
    playerChoice = "Scissors";
    game();
    //console.log(game("Scissors"))
};

function getPlayerSelection()
{
    return playerChoice;
}

function playRound(computerSelection, playerSelection)
{
    const p = document.createElement("p")
    const scores = document.createElement("p");
    p.innerText = "Computer's selection: " + computerSelection + "  |||||  " + "Player's Selection: " + playerSelection;
    body.append(p);
    const tie = document.createElement("p");
    tie.innerText = "Tie";
    

    if(playerSelection == computerSelection )
    {
        body.append(tie);
        scores.innerText = "Computer's score: " + compScore + "            ||||   Player's score: " + playerScore;
        body.append(scores);
        return "Tie";
    }
    else if(playerSelection == "Rock" && computerSelection == "Paper")
    {
        updateCompScore();
        scores.innerText = "Computer's score: " + compScore + "            ||||   Player's score: " + playerScore;
        body.append(scores);
        return "You lost  :(";
    }
    else if(playerSelection == "Rock" && computerSelection == "Scissors")
    {
        updatePlayerScore();
        scores.innerText = "Computer's score: " + compScore + "            ||||   Player's score: " + playerScore;
        body.append(scores);
        return "You won  :)";
    }
    else if(playerSelection == "Paper" && computerSelection == "Rock")
    {
        updatePlayerScore();
        scores.innerText = "Computer's score: " + compScore + "            ||||   Player's score: " + playerScore;
        body.append(scores);     
        return "You won  :)";
    }
    else if(playerSelection == "Paper" && computerSelection == "Scissors")
    {
        updateCompScore();
        scores.innerText = "Computer's score: " + compScore + "            ||||   Player's score: " + playerScore;
        body.append(scores);
        return "You lost  :(";
    }
    else if(playerSelection == "Scissors" && computerSelection == "Rock")
    {
        updateCompScore();
        scores.innerText = "Computer's score: " + compScore + "            ||||   Player's score: " + playerScore;
        body.append(scores);
        return "You lost  :(";
    }
    else
    {
        updatePlayerScore();
        scores.innerText = "Computer's score: " + compScore + "            ||||   Player's score: " + playerScore;
        body.append(scores);     
        return "You won  :)";
    }


}


function game(_playerSelection)
{   
    let count = 5;

    

        let playerSelection = getPlayerSelection();
        let computerSelection = getComputerSchoice();
        
        //console.log(playRound(computerSelection,playerSelection));
        //console.log("Player Score: " + playerScore + " Computer's Score: " + compScore)
        //console.log("~~~~~~~~~~~~~~~~~~~~~")
        playRound(computerSelection,playerSelection);

        if(playerScore === 5 || compScore ===5)
        {
            const winner = playerScore === 5 ? "Player" : "Computer";
            console.log(winner + "wins!");

            const playAgain = confirm("Do you want to play again?");

            if(playAgain)
            {
                compScore = 0;
                playerScore = 0;
                //count = 5;
            }
            
        }



}   

