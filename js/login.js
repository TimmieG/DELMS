const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function Validate(){
	var userName = $("#name").val();
	var pass = $("#password").val();

	if (userName == ''){
		$('.nameErr').html( + " " +"Enter username");
	
	}
	else if(userName.length < 6){
		$(".nameErr").html("Name must contain atleast 6 letters");
	}
	else if (userName){
		$(".nameErr").html("");
	}
	if (pass == ""){
		$('.passErr').html("Enter password");
	
	}
	else if(pass.length < 8){
		$(".passErr").html("Password must have atleast 8 letters including numbers and special characters");
	}
	else if (pass){
		$(".passErr").html("");
	}
}

// function getInfo(){
// 	// var username = 
// }