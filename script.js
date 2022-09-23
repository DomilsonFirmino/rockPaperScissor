const choices = ["rock","paper","scissor"];

let playerScore = 0;
let computerScore = 0;


let playerChoice;
let showChoice = false;

const playerRock = document.querySelector(".rock");
const playerPaper = document.querySelector(".paper");
const playerScissor = document.querySelector(".scissor");
const showNext = document.querySelector(".continue");

playerRock.addEventListener("click",() =>{
    playerChoice = "rock";
    if(showChoice == false){
        showNext.classList.toggle('show');
        showChoice = true;
    }
    playerRock.querySelector("img").classList.toggle('isSelected');
    playerPaper.querySelector("img").classList.remove('isSelected');
    playerScissor.querySelector("img").classList.remove('isSelected');
})

playerPaper.addEventListener("click",() =>{
    playerChoice = "paper";
    showChoice = true;
    if(showChoice == false){
        showNext.classList.toggle('show');
        showChoice = true;
    }
    playerPaper.querySelector("img").classList.toggle('isSelected');
    playerRock.querySelector("img").classList.remove('isSelected');
    playerScissor.querySelector("img").classList.remove('isSelected');
})

playerScissor.addEventListener("click",() =>{
    playerChoice = "scissor";
    showChoice = true;
    if(showChoice == false){
        showNext.classList.toggle('show');
        showChoice = true;
    }
    playerScissor.querySelector("img").classList.toggle('isSelected');
    playerPaper.querySelector("img").classList.remove('isSelected');
    playerRock.querySelector("img").classList.remove('isSelected');
})



function isIN(validChoice){
    for (let i = 0; i < choices.length; i++)
    {
        if(validChoice == choices[i])
            return true;
    }
    return false;
}

function singleRound(){
    let playerChoice = prompt("Rock, Paper or Scissor").toLowerCase();
    const PCCHOICE  = choices[Math.floor(Math.random() * choices.length)];

    console.log(`You choose ${playerChoice}`);
    console.log(`Computer Choice was ${PCCHOICE}`);

    if(!isIN(playerChoice))
        return "invalido";
    else if( playerChoice == PCCHOICE)
        return "This round is a Draw";
    else if(playerChoice == "rock" && PCCHOICE=="paper" || playerChoice == "scissor" && PCCHOICE=="rock" || playerChoice == "paper" && PCCHOICE=="scissor"){
        computerScore++;
        return "You Lose this round";
    } 
    else{
        playerScore++;
        return "You Win this round";
    }
}

let rounds = event =>{
    for (let i = 0; i < 5; i++)
    {
        console.log(`ROUND ${i+1}`)
        let roundResult = singleRound();
        if (roundResult == "invalido"){
            i--;
            console.log("valor invalido");
        }
        else{
            console.log(roundResult);
        }
    }
    if(computerScore == playerScore){
        console.log("The rounds ended in a draw");
    }
    else if(computerScore > playerScore){
        console.log("You lost the rounds");
    }else{
        console.log("You win the rounds");
    }
};