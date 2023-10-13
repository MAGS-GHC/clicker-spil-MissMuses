
//Counter 


    let Bears =0;
    let UpBears =0;

    function myBear(){
        Bears += (1+UpBears);//første klik = 1 bamse derfor 1+
        document.getElementById("TheBears").innerHTML = Bears;
        document.getElementById("Counter").innerHTML = Bears; 
        Highscore()
    }


//Multiplier 

function multiplier(){
if (Bears >=10 && UpBears===0) { //Når brugt giver den ikke lægnere 0 og stopper med at virke. 
    UpBears +=4;//+4 i stedet for +5 da vi allerede har stated 1+
    Bears -=10;
    document.getElementById("TheBears").innerHTML = Bears; 
    document.getElementById("CheckUpgrade").innerHTML = "Activated!"; 
}

}

//Autoclicker

let intervalAutoClick = window.setInterval(autoClicker, 10000)// = 10  sekund

function autoClicker(){
if (upgradetrue === true){
    Bears+=(10);//Den giver dig 10+ hvis true
    document.getElementById("Counter").innerHTML = Bears;
if (upgradetrue===true && UpBears===4){ //Står til 4 i stedet for 5 husk 1+ ved første klik
    Bears+=(1+UpBears);//+1 da vi har 4 og mangler 1 til at give 5 ^ 
    document.getElementById("Counter").innerHTML = Bears;

}
}


}
let upgradetrue = false
function Autoupgrade(){
if (upgradetrue === false && Bears>=10){//Tjekker hvis begge er true og afvikler derefter funktionerne
upgradetrue=true
Bears-=10 //Det koster 10 bamser for autoclicker 
document.getElementById("CheckUpgrade2").innerHTML = "Activated!"; 


}


}

//Highscore

let Highscores = 0

function Highscore(){

if (Highscores <Bears) {
Highscores=Bears
document.getElementById("highscore").innerHTML = ("Tjek my bear score!:  " + Highscores)


}


}