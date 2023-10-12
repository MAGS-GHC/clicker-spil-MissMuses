
//Counter 


    let Bears =0;
    let UpBears =0;

    function myBear(){
        Bears += (1+UpBears);
        document.getElementById("TheBears").innerHTML = Bears;
        document.getElementById("Counter").innerHTML = Bears; 
    }


//Multiplier 

function multiplier(){
if (Bears >=10 && UpBears===0) { //Når brugt giver den ikke lægnere 0 og stopper med at virke. 
    UpBears +=4;
    Bears -=10;
    document.getElementById("TheBears").innerHTML = Bears; 
}

}
