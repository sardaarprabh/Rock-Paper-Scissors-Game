const computerChoice=document.querySelector('#computer-choice');
const yourChoice=document.querySelector('#user-choice');
const result=document.querySelector('#result');

const possibleChoices=document.querySelectorAll('button');

const resultButton=document.querySelector('.resultColor');

let userChoice;
let computeChoice;
let resu;
possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
  userChoice=e.target.id;
  yourChoice.innerHTML=userChoice;
  generateComputerChoice();
  generateResult();
  if(resu==='Computer Wins'){
    resultButton.classList.add('lost');
    resultButton.classList.remove('win');
    resultButton.classList.remove('resultColor');
  }else if(resu==='You Win'){
    resultButton.classList.add('win');
    resultButton.classList.remove('resultColor');
    resultButton.classList.remove('lost');
  }else{
    resultButton.classList.add('resultColor');
    resultButton.classList.remove('win');
    resultButton.classList.remove('lost');
  }

}));

function generateComputerChoice(){
  const randomNumber=Math.floor(Math.random()*3+1);
  if(randomNumber===1){
    computeChoice='Rock';
  }
  else if(randomNumber===2){
    computeChoice='Paper';
  }
  else if(randomNumber===3){
    computeChoice='Scissors'; 
  }
  computerChoice.innerHTML=computeChoice;
}

function generateResult(){
  if((computeChoice==='Paper'&& userChoice==='Rock')||(computeChoice==='Rock'&& userChoice==='Scissors')||(computeChoice==='Scissors'&& userChoice==='Paper')){
    resu='Computer Wins';
  }
  else if((userChoice==='Paper'&& computeChoice==='Rock')||(userChoice==='Rock'&& computeChoice==='Scissors')||(userChoice==='Scissors'&& computeChoice==='Paper')){
    resu='You Win';
  }
  else if(computeChoice===userChoice){
    resu='Draw';
  }
  result.innerHTML=resu;
}