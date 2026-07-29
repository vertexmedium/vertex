let user =
JSON.parse(localStorage.getItem("vertexUser"));


let deposit =
JSON.parse(localStorage.getItem("vertexDeposit"));


let withdrawal =
JSON.parse(localStorage.getItem("vertexWithdrawal"));



if(user){

document.getElementById("userData").innerHTML =

`
Name: ${user.firstname} ${user.lastname}<br>
Username: ${user.username}<br>
Email: ${user.email}
`;

}



if(deposit){

document.getElementById("depositData").innerHTML =

`
Address: ${deposit.address}<br>
Network: ${deposit.network}<br>
Amount: ${deposit.amount}
`;

}



if(withdrawal){

document.getElementById("withdrawData").innerHTML =

`
Address: ${withdrawal.address}<br>
Network: ${withdrawal.network}<br>
Amount: ${withdrawal.amount}<br>
Status: ${withdrawal.status}
`;

}