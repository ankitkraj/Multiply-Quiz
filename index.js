var num1 = Math.floor(Math.random() *10 +1);
var num2 = Math.floor(Math.random() * 10 +1);
score.onload = 0;
let score = JSON.parse(localStorage.getItem("score"));  //parse to chANGE string to number

if (!score){
    score = 0;
}




var answer = num1 * num2
document.getElementById("question").innerHTML = `what is ${num1} multiply by ${num2}`;

document.getElementById("score").innerHTML =  `score : ${score}`

const formEl =document.getElementById("form")
const inputEl = document.getElementById("input")

formEl.addEventListener("submit" , () => {
    var userAns = +inputEl.value; //value is string to change string to number add +
    if (userAns === answer){
        score++ ;
        updateLocalStorage()  
    }else{
        score--  ;
        updateLocalStorage()        
    }
    

})

// we dont get updated score as it is set to zero
//we can use local storage but only string can be stored but we get number-->use json stringfy

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}






