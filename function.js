// function = A section of reusable code.
//            declare code once, use it whenever you want.
//            call the function to execute that code.

// example 1
function happyBirthday(username, age){
    console.log(`Happy Birthday to ${username}!`);
    console.log("Happy Birthday to you!");
    console.log(`your are ${age} years old`);
}

happyBirthday("masum", 23);



// example 2
function add(x, y){
    return x+y;
}
function substract(x, y){
    return x-y;
}
function multiplication(x, y){
    return x*y;
}
function divide(x, y){
    return x / y;
}

console.log(add(10, 4));
console.log(substract(10, 4));
console.log(multiplication(3, 4));
console.log(divide(3, 4));



// example 3
function isEven(number){
    return number % 2 === 0 ? true : false;
}

console.log(isEven(11));



// example 4
function isValidEmail(email){
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}

console.log(isValidEmail(`masum@gmail.com`));
console.log(isValidEmail(`masumgmail.com`));