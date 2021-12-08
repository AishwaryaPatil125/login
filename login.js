function validateLogin(){
var username=document.getElementById("username").value;
var pass=document.getElementById("password").value;
if(username!=""){
if(username.length>5){
if(username.match(/aishwarya/)){
document.getElementById("print").innerHTML="valid username";
}else{
document.getElementById("print").innerHTML="invalid  userName";
}
}

else{
document.getElementById("print").innerHTML="user name cannot be less than 5";
}
 if(pass.length<6){
document.getElementById("print").innerHTML="Enter valid password";
}else{
document.getElementById("print").innerHTML="Successfully Login";
}
}
}