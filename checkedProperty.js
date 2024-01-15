const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmitBtn = document.getElementById("mySubmitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmitBtn.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = "Your are subscribed";
    }
    else{
        subResult.textContent = "you are not subscribed";
    }

    if(visaBtn.checked){
        paymentResult.textContent = "you are paying with visa";
    }
    else if(mastercardBtn.checked){
        paymentResult.textContent = "you are paying with mastercard";
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = "you are paying with paypal";
    }
    else{
        paymentResult.textContent = "you are selecting payment method";
    }
}