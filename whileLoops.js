// while loop = repeat some code WHILE some condition is true

let username = "";

while(username === ""){
    username = window.prompt("enter your name");
}

console.log(`Hello ${username}`);



let loggedIn = false;
let name;
let password;

while(!loggedIn){
    username = window.prompt(`enter your name`);
    password = window.prompt(`enter your password`);

    if(username === `myUsername` && password === `myPassword`){
        loggedIn = true;
        console.log(`you are logged in!`);
    }
    else{
        console.log("invalid credentials! please try again");
    }
}