let userScore=0;
let compScore=0;
const scoreBoard_div=document.querySelector('.score-badges');
const userScore_span=document.getElementById('user-score');
const compScore_span=document.getElementById('comp-score');
const result_p=document.querySelector('.results > p');
const rock_div=document.getElementById('r');
const paper_div=document.getElementById('p');
const scissors_div=document.getElementById('s');
function getConvert(letter){
    if(letter==='r'){
        return "Rock";
    }
    if(letter==='p'){
        return "Paper";
    }
    return "Scissors";
}
function win(userChoice,compChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    const user=document.getElementById(userChoice);
    result_p.innerHTML=`${getConvert(userChoice)}(user) beats ${getConvert(compChoice)}(comp).You win!`;
    user.classList.add('green-glow');
    setTimeout(function(){user.classList.remove('green-glow')},300);
}
function lose(userChoice,compChoice){
    compScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    const user=document.getElementById(userChoice);
    result_p.innerHTML=`${getConvert(userChoice)}(user) loses to ${getConvert(compChoice)}(comp).You lost!`;
    user.classList.add('red-glow');
    setTimeout(function(){user.classList.remove('red-glow')},300);
}
function draw(userChoice,compChoice){
    const user=document.getElementById(userChoice);
    result_p.innerHTML=`${getConvert(userChoice)}(user) draws ${getConvert(compChoice)}(comp).You draww!`;
    user.classList.add('grey-glow');
    setTimeout(function(){user.classList.remove('grey-glow')},300);
}
function getCompChoice(){
    const choice=['r','p','s'];
    const ind=Math.round(Math.random()*3);
    return choice[ind];
}

function game(userChoice){
    const compChoice=getCompChoice();
    switch(userChoice+compChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,compChoice);
            break;
    }
        
}
rock_div.addEventListener('click',function(){
    game('r');
})
paper_div.addEventListener('click',function(){
    game('p');
})
scissors_div.addEventListener('click',function(){
    game('s');
})











