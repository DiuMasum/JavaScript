const myInput = document.getElementById("myInput");
const myButton = document.getElementById("myButton");
const myH3 = document.getElementById("myH3");
let age;

myButton.onclick = function(){
    age = myInput.value;
    age = Number(age);

    if(age >= 18){
        myH3.textContent = "your are adult man";
    }
    else if(age < 18){
        myH3.textContent = "your are teeneger kid!";
    }
    else if(age < 0){
        myH3.textContent = "age can't be below 0";
    }
    else{
        myH3.textContent = "you must have 18+ to enter this site";
    }
}