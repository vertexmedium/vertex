let user = JSON.parse(
localStorage.getItem("vertexUser")
);


if(!user){

window.location.href="login.html";

}



document.getElementById("firstname").value =
user.firstname || "";


document.getElementById("middlename").value =
user.middlename || "";


document.getElementById("lastname").value =
user.lastname || "";


document.getElementById("username").value =
user.username || "";


document.getElementById("email").value =
user.email || "";


document.getElementById("phone").value =
user.phone || "";




document
.getElementById("settingsForm")
.addEventListener("submit", function(e){


e.preventDefault();



user.firstname =
document.getElementById("firstname").value;


user.middlename =
document.getElementById("middlename").value;


user.lastname =
document.getElementById("lastname").value;


user.username =
document.getElementById("username").value;


user.email =
document.getElementById("email").value;


user.phone =
document.getElementById("phone").value;



let newPassword =
document.getElementById("newPassword").value;


if(newPassword){

user.password = newPassword;

}



localStorage.setItem(

"vertexUser",

JSON.stringify(user)

);



alert("Settings updated successfully");


});