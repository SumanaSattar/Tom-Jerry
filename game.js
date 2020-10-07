window.addEventListener("load",function(){

var jerry= document.querySelectorAll(".initial");
var score=document.querySelector(".score");
var bushes=document.querySelectorAll(".d");
var startButton=document.querySelector(".item8");
var topScore=document.querySelector(".topScore");
//var tLeft=document.querySelector(".timeLeft");
var previousbush=0;

var s=0;
var t=0;
var timeLeft=10;
var timeUp=false;
startButton.addEventListener("click",GameStart);


jerry.forEach(addingListner);
function addingListner(item){
    item.addEventListener("click",scoring);
    
}

function GameStart(e){
     s=0;
     score.textContent=s;
     timeLeft=10;
     //tLeft.textContent=timeLeft;
     timeUp=false;
     peep();
    /*setInterval(() => {
        if(timeLeft>0){
           timeLeft--;
           tLeft.textContent=timeLeft;
        }
        
    },1000);*/
    setTimeout(() => {
     timeUp=true;  
     if(s>t)
    {   t=s;
        topScore.textContent=t;
    }      
    },10000);
    
}


function randomBushes(b){
    var bush=Math.floor(Math.random()*b.length);
    return bush;
}
function peep(){
    if(!timeUp){
    var bush=randomBushes(bushes);
    if(previousbush!=bush){
    
    jerry[bush].classList.add("up");
    setTimeout(() => {
        jerry[bush].classList.remove("up");
            peep(); 
    
        }, 2000);
         previousbush=bush;
         console.log(previousbush);
    }else{  console.log("sorry same bush");
    peep();}
}
    
    
}



function scoring(e){
    if(e.isTrusted===true){
    console.log(e);
    s=s+1;
    score.textContent=s;
    }

}


});