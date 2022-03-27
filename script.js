
const choices = ["rock","paper","scissor"];

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
        return "Its a Tie";
    else if(playerChoice == "rock" && PCCHOICE=="paper" || playerChoice == "scissor" && PCCHOICE=="rock" || playerChoice == "paper" && PCCHOICE=="scissor")
        return "You Lose";
    else
        return "You Win";
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
        console.log();
    }
};


rounds();
