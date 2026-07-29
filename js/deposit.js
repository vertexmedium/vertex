document
.getElementById("depositForm")
.addEventListener("submit", function(e){


e.preventDefault();



let deposit = {


address:
document.getElementById("usdtAddress").value,


network:
document.getElementById("network").value,


amount:
document.getElementById("amount").value


};



localStorage.setItem(

"vertexDeposit",

JSON.stringify(deposit)

);



alert("Deposit information saved");


window.location.href="account.html";


});