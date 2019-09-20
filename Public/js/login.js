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

	$('.signUpBtn').submit(function(e){
		e.preventDefault();

		var employee={
			name:$('#userName').val(),
			email: $('#userEmail').val(),
			password:  $('#userPassword').val()
		}
		$.ajax(
			'http://localhost:3000/employees',{
			method: 'POST',
			data: employee,
			success: function(){
				alert('Sign Up was successful. Please log in.')
				window.location.assign('login.html')

			}

		})
	})
		
})



$(document).ready(function(){
	$('.signInBtn').submit(function (e){
		e.preventDefault();

		var email = $('#email').val();
		var password = $('#password').val();
		$.ajax(
			'http://localhost:3000/employees',{
			method: 'GET',
			success: function(data){
				$data.each(function(i){
					if(data[i]["email"] == email && data[i]["password"] == password){
						window.location.assign('user.html')
						alert('Welcome, ' + data[i]["name"]);
					}
					else{
						alert ('Invalid email or password');
					}
				})
			}
		})
	})
})

// $('signUpBtn').submit(function(e) {
// 	e.preventDefault();
// 	var submit = true;
// 	// evaluate the form using generic validaing
// 	if (!validator.checkAll($(this))) {
// 		submit = false;
// 	}
// 	if (submit) this.submit();
// 	return false;
// });

    