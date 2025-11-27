//your JS code here. If required.
let signup_form = document.getElementById("signup-form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm-password");
let submit = document.getElementById("submit");

submit.addEventListener("click",(e)=>{
	e.preventDefault();

	let pass = password.value;
	let pass2 = confirm_password.value;

	if(pass == pass2){
		sessionStorage.setItem("name",name.target.value);
		sessionStorage.setItem("email",email.target.value);
		sessionStorage.setItem("password",password.target.value);
		alert("Sign up successful!");
		signup_form.submit();
	}else{
		alert("Passwords do not match");
	}
})
