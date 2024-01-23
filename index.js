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
    const p = document.createElement("p")
    const scores = document.createElement("p");
    p.innerText = "Computer's selection: " + computerSelection + "  |||||  " + "Player's Selection: " + playerSelection;
    body.append(p);
    const tie = document.createElement("p");
    tie.innerText = "Tie";
    

    if(playerSelection == computerSelection )
    {
        //console.log("Tie");
        body.append(tie);
        scores.innerText = "Computer's score: " + compScore + "            ||||   Player's score: " + playerScore;
        body.append(scores);
        return "Tie";
    }
    else if(playerSelection == "Rock" && computerSelection == "Paper")
    {
        compScore++;
        updateCompScore();
        scores.innerText = "Computer's score: " + compScore + "            ||||   Player's score: " + playerScore;
        body.append(scores);
        return "You lost  :(";
    }
    else if(playerSelection == "Rock" && computerSelection == "Scissors")
    {
        playerScore++;
        updatePlayerScore();
        scores.innerText = "Computer's score: " + compScore + "            ||||   Player's score: " + playerScore;
        body.append(scores);
        return "You won  :)";
    }
    else if(playerSelection == "Paper" && computerSelection == "Rock")
    {
        playerScore++;
        updatePlayerScore();
        scores.innerText = "Computer's score: " + compScore + "            ||||   Player's score: " + playerScore;
        body.append(scores);     
        return "You won  :)";
    }
    else if(playerSelection == "Paper" && computerSelection == "Scissors")
    {
        compScore++;
        updateCompScore();
        scores.innerText = "Computer's score: " + compScore + "            ||||   Player's score: " + playerScore;
        body.append(scores);
        return "You lost  :(";
    }
    else if(playerSelection == "Scissors" && computerSelection == "Rock")
    {
        compScore++;
        updateCompScore();
        scores.innerText = "Computer's score: " + compScore + "            ||||   Player's score: " + playerScore;
        body.append(scores);
        return "You lost  :(";
    }
    else
    {
        playerScore++;
        updatePlayerScore();
        scores.innerText = "Computer's score: " + compScore + "            ||||   Player's score: " + playerScore;
        body.append(scores);     
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
}