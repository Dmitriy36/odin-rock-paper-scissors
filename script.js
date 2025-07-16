let humanScore=0;
let computerScore=0;

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

        if(humanChoice==computerChoice){
        console.log("Tie.");
    } else if(humanChoice=="ROCK" && computerChoice=="PAPER") {
        console.log(`Your choice was: ${humanChoice}, computer choice was: ${computerChoice}. You lose.`);
        computerScore+=1;
    } else if(humanChoice=="ROCK" && computerChoice=="SCISSORS") {
        console.log(`Your choice was: ${humanChoice}, computer choice was: ${computerChoice}. You win.`);
        humanScore+=1;
    } else if(humanChoice=="PAPER" && computerChoice=="SCISSORS") {
        console.log(`Your choice was: ${humanChoice}, computer choice was: ${computerChoice}. You lose.`);
        computerScore+=1;
    } else if(humanChoice=="PAPER" && computerChoice=="ROCK") {
        console.log(`Your choice was: ${humanChoice}, computer choice was: ${computerChoice}. You win.`);
        humanScore+=1;
    } else if(humanChoice=="SCISSORS" && computerChoice=="ROCK") {
        console.log(`Your choice was: ${humanChoice}, computer choice was: ${computerChoice}. You lose.`);
        computerScore+=1;
    } else if(humanChoice=="SCISSORS" && computerChoice=="PAPER") {
        console.log(`Your choice was: ${humanChoice}, computer choice was: ${computerChoice}. You win.`);
        humanScore+=1;
    }
    console.log(`Current score: computer ${computerScore}, player:${humanScore}`);
}

function playGame(numberOfRounds) {

    for (let i=0;i<numberOfRounds;i++){
        console.log(`Round number ${i+1}:`);
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore>computerScore){
        console.log(`You win! Final score: human ${humanScore} computer ${computerScore}`)
    } else if (computerScore>humanScore){
        console.log(`You lose! Final score: human ${humanScore} computer ${computerScore}`)
    } else if(computerScore==humanScore){
        console.log(`Tie! Final score: human ${humanScore} computer ${computerScore}`)
    }
}

playGame(5);

// let humanSelection=getHumanChoice();
// let computerSelection=getComputerChoice();

// playRound(humanSelection, computerSelection);
