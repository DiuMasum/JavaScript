// How to accept user input

//1. Easy way = window prompt
//2. professional way = HTML textbox


//1. window prompt
//let username;

//username = window.prompt(``);
//console.log(username);


//2. professional way = HTML textbox
let username;

document.getElementById("myBt").onclick = function(){
    username = document.getElementById("myIn").value;
    console.log(username);
}