const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

$(document).ready(function(){
	$("#signUpBtn").on('click', function(e){
		e.preventDefault();

		var arr = [];
		var url = 'http://localhost:3000/employees';
		 var userDetails = {
			 name: $('input#userName').val(),
			 email: $('input#userEmail').val(),
			 password: $('input#userPassword').val()

		 };
		 $getJSON(url, function(data){
			 $.each(data, function(i, employees){
				 arr.push(employees.userEmail);
			 })
			 for(var i = 0; i < arr.length; i++){

				 if(arr[i] == userEmail){
					 return window.location.href = 'DLMS/login.html';
				 }
				}
				return alert("User is registered! Please sign in.");
			 
		 })
	})

})