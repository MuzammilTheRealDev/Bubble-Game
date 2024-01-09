let timer = 60;
let score = 0;
let rn = 0;

function increaseScore(){
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}
function getNewHit(){
     rn = Math.floor(Math.random()*10);
     document.querySelector('#hit').textContent = rn;
}

function makeBubble(){
    let bubble = ""

for (let i = 0; i <=132 ; i++) {
    //Math.floor
     let rn =  Math.floor(Math.random()*10)

     bubble += `<div class="bubble">${rn}</div>`
}
 document.querySelector('.pbtm').innerHTML = bubble;
}


function runTimer(){
     let timeInt =setInterval(function(){
        if(timer > 0){
        timer--;
        document.querySelector('#timerval').textContent = timer;
    }
    else{
        clearInterval(timeInt);
        document.querySelector('.pbtm').innerHTML = `<h1 id = "end">Game Over</h1>`
    }
    },1000)
}

document.querySelector('.pbtm').addEventListener('click',function(details){
    let clickedNumber = Number(details.target.textContent);
    if(clickedNumber === rn){
        increaseScore();
        getNewHit();
        makeBubble();
    }
})

getNewHit();
runTimer();
makeBubble();
