document
.getElementById("withdrawForm")
.addEventListener("submit", function(e){


e.preventDefault();



let withdrawal = {


address:
document.getElementById("withdrawAddress").value,


network:
document.getElementById("withdrawNetwork").value,


amount:
document.getElementById("withdrawAmount").value,


status:
"Pending"


};



localStorage.setItem(

"vertexWithdrawal",

JSON.stringify(withdrawal)

);



alert("Withdrawal request submitted");


window.location.href="account.html";


});