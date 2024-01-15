// method chaining = calling one method after another
//                     in one continuous line of Code.

let username = window.prompt("enter your name: ");

username = username.trim().charAt(0).toUpperCase + username.trim().slice(1).toLowerCase();
console.log(username);