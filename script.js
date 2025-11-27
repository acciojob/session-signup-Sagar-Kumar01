//your JS code here. If required.
let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm-password");
let submit = document.getElementById("submit");

submit.addEventListener("click",(e)=>{
	e.preventDefault();

	let pass = password.target.value;
	let pass2 = confirm_password.target.value;

	if(pass == pass2){
		sessionStorage.setItem("name",name.target.value);
		sessionStorage.setItem("email",email.target.value);
		sessionStorage.setItem("password",password.target.value);
		alert("Sign up successful!");
	}else{
		alert("Passwords do not match");
	}
})
