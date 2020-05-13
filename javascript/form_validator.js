function ValidateConnectForm() {

	console.log("Validating form......");

	var name = $("#name");
	var email = $("#email");
	var message = $("#message");
	var password = $("#password");

	var emailRegEx= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum|ie|uk)\b$/;
	var passwordRegEx = /^[A-Za-z\d]{6,10}$/;

	if(email.val() !== "" &&
		emailRegEx.test(email.val()) &&
		password.val() !== "" &&
		passwordRegEx.test(password.val()) &&
		name.val() !== "") {

			alert("Thank you for your submission, one of our agents will be in touch shortly.");
			//window.location = "index.html";

		}
	else if(name.val() == "") {

		name.focus();
		alert("The 'Name' field is required!");
	}
	else if(email.val() == "") {

		email.focus();
		alert("The 'Email' field is required!");
	}
	else if(message.val() == "") {

		message.focus();
		alert("The 'Message' field is required!");
	}
	else if(password.val() == "") {

		password.focus();
		alert("The 'Password' field is required!");
	}
}


function ValidateCorporateForm() {

	console.log("Validating form......");

	var companyName = $("#companyName");
	var companyEmail = $("#companyEmail");
	var message = $("#message");

	var companyEmailRegEx= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum|ie|uk)\b$/;


	if(companyEmail.val() !== "" &&
		companyEmailRegEx.test(companyEmail.val()) &&
		companyName.val() !== "") {

			alert("Thank you for your submission, one of our agents will be in touch shortly.");
			//window.location = "index.html";

		}
	else if(companyName.val() == "") {

		companyName.focus();
		alert("The 'Company Name' field is required!");
	}
	else if(companyEmail.val() == "") {

		companyEmail.focus();
		alert("The 'Company Email' field is required!");
	}
	else if(message.val() == "") {

		message.focus();
		alert("The 'Message' field is required!");
	}
}
