let PlayerChoice;
let ComputerChoice;

const choices = ["rock","paper","scissor"];

const cards = document.querySelectorAll(".player .card");
const ComputerScore = document.querySelector(".cScore");
const PlayerScore = document.querySelector(".pScore");

let selected = false;
for(let i=0; i<cards.length;i++){
    cards[i].addEventListener("click",function(){
        if(!selected){
            toggleC(cards[i].querySelector(".card__content"));
            PlayerChoice = cards[i].className.substring(5);
            selected = true;
            singleRound();
        }     
    });
}


function toggleC(content){
    content.classList.toggle('isflipped');
}
function toggleD(content){
    content.classList.toggle('asflipped');
}
function declareWinner(resultado){
   const a = document.querySelector(".win");
   a.innerHTML = resultado;
   a.style.visibility = "visible";
   updateScore(resultado);
}
function updateScore(resultado){
    if(resultado == "YOU LOSE")
        ComputerScore.innerHTML = (ComputerScore.innerHTML.charAt(0)-'0')+1;
    else if(resultado == "YOU WIN")
        PlayerScore.innerHTML = (PlayerScore.innerHTML.charAt(0)-'0')+1;
}

function singleRound(){
    ComputerChoice  = choices[Math.floor(Math.random() * choices.length)];
    let a = ".computer "; a = a + "."+ComputerChoice;
    
    let card = document.querySelector(a);
    toggleD(card.querySelector(".card__content"));


    if( PlayerChoice == ComputerChoice)
        declareWinner("IT'S a TIE");
    else if(PlayerChoice == "rock" && ComputerChoice == "paper" || PlayerChoice == "paper" && ComputerChoice == "scissor" || PlayerChoice == "scissor" && ComputerChoice == "rock")
        declareWinner("YOU LOSE");
    else
        declareWinner("YOU WIN");
};