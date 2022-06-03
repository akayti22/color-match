// console.log('hay');

const colorName = document.getElementById('getcolor');
const textChange = document.getElementById('changeText');
const textorBg = document.getElementById('textbg');
const btnName = document.querySelectorAll('.btnname');
const btnOne = document.querySelector('.onebtn');
const btnTwo = document.querySelector('.twobtn');
const getbar = document.querySelector('.bar');
const getScore = document.getElementById('zero');
const gethighest = document.getElementById('highest');
const btnReplay = document.querySelector(".replay");
const upperDiv = document.querySelector(".upper");
const stillOne = document.querySelector(".doublej");

let time = 5;
let score = 0;

namae();


function forGame(val){
    const gettoNo=Number(val);
     
    if(btnName[gettoNo].style.background === colorName.textContent ){
        score += 1;
        if(time > 1){
            if(score%5===0){
                time -= 1;

            }
        }  
        getbar.style.animation = "none";   
        stillOne.style.animation = "none"; 
       
        getScore.textContent = score;
        setTimeout(namae,1);
           
    }else{
    
     gameOver();
  
    } 
}

function namae(){
    let randomColor = ["red","blue","orange","green","violet","pink","yellow"];
    let valueOne = Math.floor(Math.random()*randomColor.length);
    let colorOne = randomColor.splice(valueOne,1);
    
    let valueTwo = Math.floor(Math.random()*randomColor.length);
    let colorTwo = randomColor.splice(valueTwo,1);
    
    let creatArr = ["text","background"];
    let getArr = Math.floor(Math.random()*creatArr.length);
    
    let hotelr = [colorOne,colorTwo];
    let honest = Math.floor(Math.random()*hotelr.length);
    
    colorName.textContent = hotelr[honest];
    btnOne.textContent = colorOne;
    btnTwo.textContent = colorTwo;
    btnOne.style.background = colorTwo;
    btnTwo.style.background = colorOne;
  

    getbar.style.animation =`ohmybaymax ${time}s linear`;
    stillOne.style.animation =`ohmybaymax ${time}s linear`;

    }

   

function gameOver(){
    btnOne.disabled = true;
    btnTwo.disabled = true;
    getbar.style.animation = "none"; 
    stillOne.style.animation = "none"; 

    if(getScore.textContent > gethighest.textContent){
        gethighest.textContent = score;
    }
    upperDiv.style.display = "block";
}

getbar.addEventListener("animationend",gameOver);

btnReplay.addEventListener("click",function(){
    score = 0;
    time = 5;
    namae();
    btnOne.disabled = false;
    btnTwo.disabled = false;
    getScore.textContent = score;
    upperDiv.style.display = "none";
  

})








