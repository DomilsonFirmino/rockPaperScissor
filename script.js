let PlayerChoice;
let ComputerChoice;
let contRounds = 0;

const choices = ["rock","paper","scissor"];

const cards = document.querySelectorAll(".player .card");
const ComputerScore = document.querySelector(".cScore");
const PlayerScore = document.querySelector(".pScore");
const RoundNumber = document.querySelector(".number");

const mutationObserver = new MutationObserver(entries =>{
    if(entries[0].target.nodeValue==6){
        RoundNumber.childNodes[0].nodeValue = contRounds-1;
        let cs = parseInt(ComputerScore.innerHTML)
        let ps = parseInt(PlayerScore.innerHTML)
        if( cs > ps){
            declareWinner("YOU LOSE THE GAME")
        }
        else if(cs === ps){
            declareWinner("THE GAME IS TIED")
        }else{
            declareWinner("YOU WIN THE GAME")
        }
    }     
})

mutationObserver.observe(RoundNumber.childNodes[0],{characterData: true})

let selected = false;
for(let i=0; i<cards.length;i++){
    cards[i].addEventListener("click",function(){
        if(!selected && contRounds < 5){
            toggleC(cards[i].querySelector(".card__content"));
            PlayerChoice = cards[i].className.substring(5);
            selected = true;
            singleRound();
            contRounds++;
            RoundNumber.childNodes[0].nodeValue = contRounds;
            setTimeout(reset,900);
            setTimeout(()=>{
                if(contRounds == 5){
                contRounds++;
                RoundNumber.childNodes[0].nodeValue = contRounds;
                }
            },1200)
            
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
}

function reset(){
    selected = false;
    let a = ".computer "; a = a + "."+ComputerChoice; a = a+" .card__content";
    document.querySelector(a).classList.remove("asflipped");

    document.querySelector(".win").style.visibility = "hidden";

    let b = ".player "; b = b + "."+PlayerChoice; b = b + " .card__content";
    document.querySelector(b).classList.remove("isflipped");
}