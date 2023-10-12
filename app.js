
//Counter 


    let Bears =0;

    function myBear(){
        Bears += 1;
        document.getElementById("TheBears").innerHTML = Bears;
        
    
    }

    //ShowCounter
    function ShowBears(){
    document.getElementById("Counter").innerHTML = Bears;
    }

//Multiplier 

function multiplier(){
if (Bears >=10) {
    Bears +=5;
    Bears -=10;
    document.getElementById("TheBears").innerHTML = Bears; 
}

}
