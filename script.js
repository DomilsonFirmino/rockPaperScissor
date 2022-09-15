const choices = ["rock","paper","scissor"];
let playerScore = 0;
let computerScore = 0;

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

rounds();
