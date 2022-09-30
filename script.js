let PlayerScore;
let ComputerScore;
let PlayerChoice;
let ComputerChoice;

const choices = ["rock","paper","scissor"];
const cards = document.querySelectorAll(".player .card");

let selected = false;
for(let i=0; i<cards.length;i++){
    cards[i].addEventListener("click",function(){
        if(!selected){
            toggleC(cards[i].querySelector(".card__content"));
            PlayerChoice = cards[i].className.substring(4);
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

function singleRound(){
    ComputerChoice  = choices[Math.floor(Math.random() * choices.length)];
    let a = ".computer "; a = a + "."+ComputerChoice;
    
    let card = document.querySelector(a);
    toggleD(card.querySelector(".card__content"));
    console.log(`You choosed ${PlayerChoice}`);
    console.log(`Computer Choice is ${ComputerChoice}`);

    if( PlayerChoice == ComputerChoice)
        return "Its a Tie";
    else if(PlayerChoice == "rock" && ComputerChoice=="paper" || PlayerChoice == "scissor" && ComputerChoice=="rock" || PlayerChoice == "paper" && ComputerChoice=="scissor")
        return "You Lose";
    else
        return "You Win";
};