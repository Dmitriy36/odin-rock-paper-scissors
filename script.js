let humanScore=0;
let computerScore=0;
let currentRound=1;
let reportText = "";
let roundAnnouncer = document.querySelector(".instructions-text");

const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");
const promptPane = document.querySelector('.choice-prompt');
const resultsPane = document.querySelector(".results-panel");
const testCheck = document.createElement("p");

const anotherGameDiv = document.createElement("div");
const gameOverPara = document.createElement("p");
const finalScorePara = document.createElement("p");
const winPara = document.createElement("p");
const lossPara = document.createElement("p");
const tiePara = document.createElement("p");
const btnPlayAgain = document.createElement("button");

function getComputerChoice() {
    let choice=Math.random()*100;
    if(choice <=33){
        // console.log(choice);
        return "ROCK";
    } else if(choice>33 && choice<=66){
        // console.log(choice);
        return "PAPER";
    } else if(choice>66 && choice<=100){
        // console.log(choice);
        return "SCISSORS";
    }
}

function getHumanChoice() {
    let choice="";
    let result="";
    let okToProceed=false;
    while (!okToProceed) {
        choice=prompt("Make your choice! \n Enter rock, paper or scissors (type \"q\" to quit):");

        if(
            choice.toUpperCase()=="ROCK" || 
            choice.toUpperCase()=="PAPER" ||
            choice.toUpperCase()=="SCISSORS"
        ) {
            result=choice.toUpperCase()
            okToProceed=true;
            break;
        } else if(choice==="q"){
            break;
        }
    }
    return result;
}

function playRound(humanChoice, computerChoice) {

roundAnnouncer.textContent = `Round #${currentRound}`;

        if(humanChoice==computerChoice){
        reportText=`Your choice was: ${humanChoice}, computer choice was: ${computerChoice}. Tie...`;
            reportStats(reportText, "Current score: " + getCurrentScoreText());

    } else if(humanChoice=="ROCK" && computerChoice=="PAPER") {        
        computerScore+=1;
        reportText=`Your choice was: ${humanChoice}, computer choice was: ${computerChoice}. You lose - LOL!`;
            reportStats(reportText, "Current score: " + getCurrentScoreText());

    } else if(humanChoice=="ROCK" && computerChoice=="SCISSORS") {
        humanScore+=1;
        reportText=`Your choice was: ${humanChoice}, computer choice was: ${computerChoice}. You win...`;
            reportStats(reportText, "Current score: " + getCurrentScoreText());

    } else if(humanChoice=="PAPER" && computerChoice=="SCISSORS") {
        computerScore+=1;
        reportText=`Your choice was: ${humanChoice}, computer choice was: ${computerChoice}. You lose - LOL!`;
            reportStats(reportText, "Current score: " + getCurrentScoreText());

    } else if(humanChoice=="PAPER" && computerChoice=="ROCK") {
        humanScore+=1;
        reportText=`Your choice was: ${humanChoice}, computer choice was: ${computerChoice}. You win...`;
            reportStats(reportText, "Current score: " + getCurrentScoreText());

    } else if(humanChoice=="SCISSORS" && computerChoice=="ROCK") {
        computerScore+=1;
        reportText=`Your choice was: ${humanChoice}, computer choice was: ${computerChoice}. You lose - LOL!`;
            reportStats(reportText, "Current score: " + getCurrentScoreText());

    } else if(humanChoice=="SCISSORS" && computerChoice=="PAPER") {
        humanScore+=1;
        reportText=`Your choice was: ${humanChoice}, computer choice was: ${computerChoice}. You win...`;
            reportStats(reportText, "Current score: " + getCurrentScoreText());
    }
    currentRound++;
    if(currentRound >5){
        resetGame();
    }
}

function resetGame() {        

    btnRock.disabled=true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;



    btnPlayAgain.textContent = "Play Again?";
    btnPlayAgain.addEventListener("click", restartGame);
    btnPlayAgain.style.alignSelf="center";

    winPara.textContent="You ...win.";
    winPara.style.color="green";
    winPara.style.textAlign = "center";

    lossPara.textContent="You LOSE - LOL!"
    lossPara.style.color="red";
    lossPara.style.textAlign = "center";

    tiePara.textContent="Tie...";
    tiePara.style.color="blue";
    tiePara.style.textAlign = "center";
     
    gameOverPara.textContent = "GAME OVER";
    finalScorePara.textContent = "Final Score: " + getCurrentScoreText();
    gameOverPara.style.textAlign="center";
    finalScorePara.style.textAlign="center";



    anotherGameDiv.append(gameOverPara);
    anotherGameDiv.append(finalScorePara);    

    if(computerScore > humanScore){
        anotherGameDiv.append(lossPara);
    } else if (computerScore < humanScore){
        anotherGameDiv.append(winPara);
    } else if (computerScore === humanScore){
        anotherGameDiv.append(tiePara);
    }

    promptPane.append(anotherGameDiv);
    promptPane.append(btnPlayAgain);
}

function restartGame() {
    humanScore = 0;
    computerScore = 0;
    currentRound = 1;
    roundAnnouncer.textContent="Round #1";
    this.remove();     //delete button
    lossPara.remove();
    winPara.remove();
    tiePara.remove();
    anotherGameDiv.remove();    //delete the report div
    resultsPane.textContent="";        // clear console
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;

}

function getCurrentScoreText(){
    return `computer ${computerScore}, player:${humanScore}`;
}

function reportStats(report, running){
    const reportText = document.createElement("p");
    reportText.textContent = report;
    resultsPane.append(reportText);    
   
    const runningText = document.createElement("p");
    runningText.textContent = running;
    runningText.style.color='blue';
    resultsPane.append(runningText);
}

function rockButtonClicked(){
    playRound("ROCK", getComputerChoice()); 
}

function paperButtonClicked(){
    playRound("PAPER", getComputerChoice()); 
}

function scissorsButtonClicked(){
    playRound("SCISSORS", getComputerChoice()); 
}

btnRock.addEventListener("click", rockButtonClicked);
btnPaper.addEventListener("click", paperButtonClicked);
btnScissors.addEventListener("click", scissorsButtonClicked);




