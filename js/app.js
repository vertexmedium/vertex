let user = JSON.parse(
localStorage.getItem("vertexUser")
);


if(!user){

window.location.href="login.html";

}


document.getElementById("username").innerHTML =
user.username;



function logout(){

localStorage.removeItem("vertexLogin");

window.location.href="login.html";

}