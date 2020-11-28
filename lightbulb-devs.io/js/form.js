var validate = ()=>{

	var contactForm = ()=>{
		//Contact Form parameters
		var contactForm = 'contact_form';
		var name = {
			full: document.forms[contactForm]['name'], //Name field
			label: document.querySelector('.contact-form .name label'), //Label for name field
			border: document.querySelector('.contact-form .name .underline'), //Field border
			error: document.querySelector('.name-error') //Name field validation error message
		};

		var date = {
			day: document.forms[contactForm]['date'], //Date field
			today: new Date()
		};

		var phone = {
			number: document.forms[contactForm]['phone'], //Phone number field
			label: document.querySelector('.contact-form .phone label'), //Label for phone number field
			border: document.querySelector('.contact-form .phone-field+.underline'), //Field border
			error: document.querySelector('.phone-error'), //Phone number field validation error message
		};

		var email = {
			address: document.forms[contactForm]['email'], //E-mail address field
			label: document.querySelector('.contact-form .email label'), //Label for e-mail address field
			border: document.querySelector('.contact-form .email-field+.underline'), //Field border
			error: document.querySelector('.email-error') //E-mail address field validation error message
		};

		var website = {
			url: document.forms[contactForm]['website'], //Website field
			label: document.querySelector('.contact-form .website label'), //Label for website field
			border: document.querySelector('.contact-form .website-field+.underline'), //Field border
			error: document.querySelector('.website-error') //Website field validation error message
		};

		var message = {
			field: document.forms[contactForm]['message'], //Message field
			label: document.querySelector('.contact-form .message label'), //Label for message field
			error: document.querySelector('.message-error') //Message field validation error message
		};

		var submit = document.forms[contactForm]['send_message']; //Submit button

		var errorMessage = { //Form validation error feedback messages...
			name: {//... for name field
				empty: "Please enter your name",
				invalid: "Please enter your full name"
			},
			phone: {//... for phone number field
				empty: "Please enter your phone number",
				invalid: "Please enter a valid phone number"
			},
			email: {//... for e-mail address field
				empty: "Please enter your e-mail address",
				invalid: "Please enter a valid e-mail address"
			},
			message: "Please enter your message" //... for message field
		};

		var fieldValidity = {
			name: ()=>{
				if (name.error.innerHTML == errorMessage.name.empty || name.error.innerHTML == errorMessage.name.invalid) {
					name.border.style.backgroundColor = 'var(--exclude)';
				} else if (name.error.innerHTML != errorMessage.name.empty || name.error.innerHTML != errorMessage.name.invalid) {
					name.border.style.backgroundColor = 'var(--blue)';
				}
			},
			phone: ()=>{
				if (phone.error.innerHTML == errorMessage.phone.empty || phone.error.innerHTML == errorMessage.phone.invalid) {
					phone.border.style.backgroundColor = 'var(--exclude)';
				} else if (phone.error.innerHTML != errorMessage.phone.empty || phone.error.innerHTML != errorMessage.phone.invalid) {
					phone.border.style.backgroundColor = 'var(--blue)';
				}
			},
			email: ()=>{
				if (email.error.innerHTML == errorMessage.email.empty || email.error.innerHTML == errorMessage.email.invalid) {
					email.border.style.backgroundColor = 'var(--exclude)';
				} else if (email.error.innerHTML != errorMessage.email.empty || email.error.innerHTML != errorMessage.email.invalid) {
					email.border.style.backgroundColor = 'var(--blue)';
				}
			},
			message: ()=>{
				if (message.error.innerHTML == errorMessage.message) {
					message.field.style.borderColor = 'var(--exclude)';
				} else if (message.error.innerHTML != errorMessage.message) {
					message.field.style.borderColor = 'var(--blue)';
				}
			}
		};

		//To fill the error messages with blanks once the page is loaded
		var preSubmitable = ()=>{
			var formErrors = [name.error, phone.error, email.error, message.error];
			for (var i = 0; i < formErrors.length;) {
				formErrors[i].innerHTML = " ";
				i += 1;
			}
		};

		//To check whether all form field contents are valid; if all are valid, the user can submit i.e. Submit button becomes enabled
		var submitable = ()=>{
			if (name.error.innerHTML == "" && phone.error.innerHTML == "" && email.error.innerHTML == "" && message.error.innerHTML == "") {
				submit.removeAttribute('disabled');
				submit.className = submit.className.replace(' disabled-button', ' enabled');
			}
			if (!(name.error.innerHTML == "" && phone.error.innerHTML == "" && email.error.innerHTML == "" && message.error.innerHTML == "")) {
				submit.setAttribute('disabled', '');
				submit.className = submit.className.replace(' enabled', ' disabled-button');
			}
		};

		//To check the index number of a character in a string
		var nthIndexOf = (string, character, index)=>{
			var stringLength = string.length, i;

			for (i = 0; index > 0 && i !== -1; index -= 1) {
				i = string.indexOf(character, i ? (i + 1) : i);
			}

			return i;
		}

		//Sets the current date as the date field's value
		date.day.setAttribute('value', '' + date.today.getFullYear() + '-' + (date.today.getMonth() + 1) + '-' + date.today.getDate() + '');

		//Calling the function that fills the error messages with blanks
		preSubmitable();

		//Calling the function that checks for the form validation
		submitable();

		//Name field label
		name.full.addEventListener('focus', ()=>{//When the user is on the name field...
			name.full.removeAttribute('placeholder'); //... remove the placeholder
			name.full.style = 'padding-bottom: 0;'; //Remove the label
			name.label.style = 'opacity: 1; transform: translateY(0); transition: transform 0.1s ease-in-out;'; //... and show the label text
			name.border.style = 'width: 100%; height: 2.5px;'; //Show border
			fieldValidity.name();
		}, false);

		//Name field validation
		name.full.addEventListener('keydown', (event)=>{

			if (event.keyCode == 32) {
				if ((name.full.value.match(/\s/g) || []).length == 1) {//To allow only one white space between the two names
					event.preventDefault();
				}
			}

			if (name.full.value == "" || name.full.value == " " || name.full.value == null) {//If the field is not empty...
				name.error.innerHTML = errorMessage.name.empty; //... display a message to inform the user
				if (event.keyCode == 32) {//Disable spacebar
					event.preventDefault();
				}
			} else if (name.full.value != "" || name.full.value != null) {//If the field is not empty
				if (name.full.value.length < 5 || name.full.value.indexOf(" ") < 2 || (name.full.value.indexOf(" ") == name.full.value.length - 1)) {//Displays an error message if the user hasn't entered their full name
					name.error.innerHTML = errorMessage.name.invalid;
				} else if (name.full.value.length >= 5 && name.full.value.indexOf(" ") > 1 && (name.full.value.substring((name.full.value.indexOf(" ")), (name.full.value.length - 1)).length > 1)) {//Removes error message if user enters name correctly
					name.error.innerHTML = "";
				}
			}

			if ((name.full.value != "" && name.full.value.length < 5) || (name.full.value != "" && name.full.value.indexOf(" ") < 2) || (name.full.value != "" && (name.full.value.indexOf(" ") == name.full.value.length - 1))) {//Displays an error message when the name is not entered in the correct format requested
				name.error.innerHTML = errorMessage.name.invalid;
			} else if (name.full.value.length >= 5 && name.full.value.indexOf(" ") > 1 && (name.full.value.substring((name.full.value.indexOf(" ")), (name.full.value.length - 1)).length > 1)) {//To not display any error message if the name is entered in the correct format requested
				name.error.innerHTML = "";
			}

			fieldValidity.name();

			submitable();

		}, false);

		name.full.addEventListener('keyup', ()=>{

			if (name.full.value == "" || name.full.value == " " || name.full.value == null) {//If the field is not empty
				name.error.innerHTML = errorMessage.name.empty;
			} else if (name.full.value != "" || name.full.value != null) {//If the field is not empty
				if (name.full.value.length < 5 || name.full.value.indexOf(" ") < 2 || (name.full.value.indexOf(" ") == name.full.value.length - 1)) {//Displays an error message if the user hasn't entered their full name
					name.error.innerHTML = errorMessage.name.invalid;
				} else if (name.full.value.length >= 5 && name.full.value.indexOf(" ") > 1 && (name.full.value.substring((name.full.value.indexOf(" ")), (name.full.value.length - 1)).length > 1)) {//Removes error message if user enters name correctly
					name.error.innerHTML = "";
				}
			}

			if ((name.full.value != "" && name.full.value.length < 5) || (name.full.value != "" && name.full.value.indexOf(" ") < 2) || (name.full.value != "" && (name.full.value.indexOf(" ") == name.full.value.length - 1))) {//Displays an error message when the name is not entered in the correct format requested
				name.error.innerHTML = errorMessage.name.invalid;
			} else if (name.full.value.length >= 5 && name.full.value.indexOf(" ") > 1 && (name.full.value.substring((name.full.value.indexOf(" ")), (name.full.value.length - 1)).length > 1)) {//To not display any error message if the name is entered in the correct format requested
				name.error.innerHTML = "";
			}

			fieldValidity.name();

			submitable();

		}, false);

		name.full.addEventListener('blur', ()=>{//When the user leaves the name field...

			if (name.full.value == "" || name.full.value == null) {//... and the field is empty...
				name.full.setAttribute('placeholder', 'Your Name*'); //Restore the field's placeholder
				name.full.style = 'padding-bottom: 2px;'; //Remove the label
				name.label.style = 'opacity: 0; transform: translateY(7px); transition: none;'; //Remove the label
				name.border.style = 'width: 100%; height: 0.5px !important; background-color: var(--exclude);'; //Reduce the border
				name.error.innerHTML = errorMessage.name.empty; //Display the error message
			} else if (name.full.value != "" || name.full.value == null) {
				name.full.style = 'padding-bottom: 2px;'; //Remove the label
				name.border.style = 'width: 100% !important; height: 0.5px !important;'; //Keeps border
			}
			fieldValidity.name();

		}, false);

		//Phone Number field label
		phone.number.addEventListener('focus', ()=>{//When the user is on the phone number field...
			phone.number.removeAttribute('placeholder'); //... remove the placeholder
			phone.number.style = 'padding-bottom: 0;'; //Remove the label
			phone.label.style = 'opacity: 1; transform: translateY(0); transition: transform 0.1s ease-in-out;'; //... and show the label text
			phone.border.style = 'width: 100%; height: 2.5px;'; //Show border
			fieldValidity.phone();
		}, false);

		//Phone Number field validation
		phone.number.addEventListener('keydown', (event)=>{

			if (event.keyCode == 32) {//Disable Spacebar
				event.preventDefault();
			}

			if (phone.number.value == "" || phone.number.value == null) {//If the field is empty...
				phone.error.innerHTML = errorMessage.phone.empty; //... display a message to inform the user
			} else if (phone.number.value != "" || phone.number.value != null) {
				if (!Number.isInteger(parseInt(phone.number.value, 10))) {//If the user enters non-number value (e.g. text/string)
					phone.error.innerHTML = errorMessage.phone.invalid; //... inform the user that it is invalid
				} else if (Number.isInteger(parseInt(phone.number.value, 10))) {//If the user enters a number...
					if (phone.number.value.length >= 10) {//... and the number is at least ten (10) digits
						ignoreSpace = phone.number.value.trim();
						if (Number.isInteger(parseInt(ignoreSpace, 10))) {
							phone.error.innerHTML = ""; //... remove error message
						}
					}
					if (phone.number.value.length < 10) {//If the number entered is less than 10 digits...
						phone.error.innerHTML = errorMessage.phone.invalid; //... show error message to inform the user
					}
				}
			}

			fieldValidity.phone();

			submitable();

		}, false);
		
		phone.number.addEventListener('keyup', (event)=>{

			if (phone.number.value == "" || phone.number.value == null) {
				phone.error.innerHTML = errorMessage.phone.empty;
			} else if (phone.number.value != "" || phone.number.value != null) {
				if (!Number.isInteger(parseInt(phone.number.value, 10))) {
					phone.error.innerHTML = errorMessage.phone.invalid;
				} else if (Number.isInteger(parseInt(phone.number.value, 10))) {
					if (phone.number.value.length >= 10) {
						ignoreSpace = phone.number.value.trim();
						if (Number.isInteger(parseInt(ignoreSpace, 10))) {
							phone.error.innerHTML = "";
						}
					}
					if (phone.number.value.length < 10) {
						phone.error.innerHTML = errorMessage.phone.invalid;
					}
				}
			}

			fieldValidity.phone();

			submitable();

		}, false);
		
		phone.number.addEventListener('blur', ()=>{//When the user leaves the field...

			if (phone.number.value == "" || phone.number.value == null) {//... and the field is empty
				phone.number.setAttribute('placeholder', 'Your Phone Number*'); //... restore the placeholder
				phone.number.style = 'padding-bottom: 1.5px;'; //Remove the label
				phone.label.style = 'opacity: 0; transform: translateY(7px); transition: none;'; //... hide the label text
				phone.border.style = 'width: 100%; height: 1px; background-color: var(--exclude);'; //... hide the border
				phone.error.innerHTML = errorMessage.phone.empty; //... and inform the user that the field is empty
			} else if (name.full.value != "" || name.full.value != " " || name.full.value == null) {
				phone.number.style = 'padding-bottom: 1.5px;'; //Remove the label
				phone.border.style = 'width: 100% !important; height: 1px;'; //Keeps border
			}
			fieldValidity.phone();

		}, false);
		
		//E-mail field label
		email.address.addEventListener('focus', ()=>{//If the user is on the e-mail field
			email.address.removeAttribute('placeholder'); //... remove the placeholder
			email.address.style = 'padding-bottom: 0;'; //Remove the label
			email.label.style = 'opacity: 1; transform: translateY(0); transition: transform 0.1s ease-in-out;'; //... and display the label text
			email.border.style = 'width: 100%; height: 2.5px;'; //Show border
			fieldValidity.email();
		}, false);

		//E-mail field validation
		email.address.addEventListener('keydown', ()=>{

			if (email.address.value == "" || email.address.value == " " || email.address.value == null) {//If the field is empty...
				email.error.innerHTML = errorMessage.email.empty; //Display the error message
			} else if (email.address.value != "" || email.address.value != null) {//If the field is not empty...
				if (email.address.value.indexOf("@") < 1 || (email.address.value.indexOf("@") == email.address.value.length - 1)) {
					//To display an error message if the e-mail address is incomplete: if the user stops at '@'
					email.error.innerHTML = errorMessage.email.invalid;
				} else if (email.address.value.indexOf("@") >= 1 && (email.address.value.substring((email.address.value.indexOf("@")), (email.address.value.length - 1)).length > 3)) {//If the user doesn't stop at '@'...
					if ((email.address.value.match(/\./g) || []).length >= 2) {//...and the user has a '.' in their e-mail address...
						if (email.address.value.indexOf("@") < nthIndexOf(email.address.value,'.', 2)) {//... allows the '.' without returning an error
							if (nthIndexOf(email.address.value, '.', 2) < (email.address.value.length - 1)) {//When the complete/valid e-mail address has been entered
								email.error.innerHTML = "";
							}
							if (nthIndexOf(email.address.value, '.', 2) >= (email.address.value.length - 1)) {//To display an error message if the e-mail address is incomplete: if the user stops at '.' (of e.g. '.com')
								email.error.innerHTML = errorMessage.email.invalid;
							}
						} else {//To display an error message if the e-mail address is incomplete
							email.error.innerHTML = errorMessage.email.invalid;
						}
					}
					if ((email.address.value.match(/\./g) || []).length == 1) {//If the user doesn't have a '.' in their e-mail address...
						if (email.address.value.indexOf("@") < nthIndexOf(email.address.value, '.', 1)) {
							if (nthIndexOf(email.address.value, '.', 1) < (email.address.value.length - 1)) {//When the complete/valid e-mail address has been entered
								email.error.innerHTML = "";
							}
							if (nthIndexOf(email.address.value, '.', 1) >= (email.address.value.length - 1)) {//To display an error message if the e-mail address is incomplete: if the user stops at '.' (of e.g. '.com')
								email.error.innerHTML = errorMessage.email.invalid;
							}
						} else {//To display an error message if the e-mail address is incomplete
							email.error.innerHTML = errorMessage.email.invalid;
						}
					}
				}
			}

			fieldValidity.email();

			submitable();

		}, false);
		
		email.address.addEventListener('keyup', ()=>{

			if (email.address.value == "" || email.address.value == " " || email.address.value == null) {//If the field is empty...
				email.error.innerHTML = errorMessage.email.empty; //Display the error message
			} else if (email.address.value != "" || email.address.value != null) {//If the field is not empty...
				if (email.address.value.indexOf("@") < 1 || (email.address.value.indexOf("@") == email.address.value.length - 1)) {
					//To display an error message if the e-mail address is incomplete: if the user stops at '@'
					email.error.innerHTML = errorMessage.email.invalid;
				} else if (email.address.value.indexOf("@") >= 1 && (email.address.value.substring((email.address.value.indexOf("@")), (email.address.value.length - 1)).length > 3)) {//If the user doesn't stop at '@'...
					if ((email.address.value.match(/\./g) || []).length >= 2) {//...and the user has a '.' in their e-mail address...
						if (email.address.value.indexOf("@") < nthIndexOf(email.address.value,'.', 2)) {//... allows the '.' without returning an error
							if (nthIndexOf(email.address.value, '.', 2) < (email.address.value.length - 1)) {//When the complete/valid e-mail address has been entered
								email.error.innerHTML = "";
							}
							if (nthIndexOf(email.address.value, '.', 2) >= (email.address.value.length - 1)) {//To display an error message if the e-mail address is incomplete: if the user stops at '.' (of e.g. '.com')
								email.error.innerHTML = errorMessage.email.invalid;
							}
						} else {//To display an error message if the e-mail address is incomplete
							email.error.innerHTML = errorMessage.email.invalid;
						}
					}
					if ((email.address.value.match(/\./g) || []).length == 1) {//If the user doesn't have a '.' in their e-mail address...
						if (email.address.value.indexOf("@") < nthIndexOf(email.address.value,'.', 1)) {
							if (nthIndexOf(email.address.value, '.', 1) < (email.address.value.length - 1)) {//When the complete/valid e-mail address has been entered
								email.error.innerHTML = "";
							}
							if (nthIndexOf(email.address.value, '.', 1) >= (email.address.value.length - 1)) {//To display an error message if the e-mail address is incomplete: if the user stops at '.' (of e.g. '.com')
								email.error.innerHTML = errorMessage.email.invalid;
							}
						} else {//To display an error message if the e-mail address is incomplete
							email.error.innerHTML = errorMessage.email.invalid;
						}
					}
				}
			}

			fieldValidity.email();

			submitable();

		}, false);
		
		email.address.addEventListener('blur', ()=>{//When the user leaves the field

			if (email.address.value == "" || email.address.value == null) {//... and the field is empty
				email.address.setAttribute('placeholder', 'Your E-mail Address*'); //Restore the placeholder
				email.address.style = 'padding-bottom: 2px;'; //Remove the label
				email.label.style = 'opacity: 0; transform: translateY(7px); transition: none;'; //... hide the label text
				email.border.style = 'width: 100%; height: 0.5px !important; background-color: var(--exclude);'; //... hide Reduce the border
				email.error.innerHTML = errorMessage.email.empty; //... and inform the user that the field is empty
			} else if (name.full.value != "" || name.full.value != " " || name.full.value != null) {
				email.address.style = 'padding-bottom: 2px;'; //Remove the label
				email.border.style = 'width: 100% !important; height: 0.5px;'; //Keeps border
			}
			fieldValidity.email();

		}, false);
		
		//Website field label
		website.url.addEventListener('focus', ()=>{//When the user is on the website field
			website.url.removeAttribute('placeholder'); //Remove the placeholder
			website.url.style = 'padding-bottom: 0;'; //Remove the label
			website.label.style = 'opacity: 1; transform: translateY(0); transition: transform 0.1s ease-in-out;'; //... and show the label text
			website.border.style = 'width: 100%; height: 2.5px;'; //Show border
		}, false);

		website.url.addEventListener('blur', ()=>{//When the user leaves the field

			if (website.url.value == " " || website.url.value == "" || website.url.value == null) {//... and the field is empty
				website.url.setAttribute('placeholder', 'Your Website'); //Restore placeholder
				website.label.style = 'opacity: 0; transform: translateY(7px); transition: none;'; //... hide the label text
				website.border.style = 'width: 0%;'; //Keeps border
			} else if (website.url.value != " " || website.url.value != "" || website.url.value != null) {//If the field is not empty
				website.url.style = 'padding-bottom: 1.5px;'; //Remove the label
				website.border.style = 'width: 100% !important; height: 1px;'; //Keeps border
			}

		}, false);

		//message field label
		message.field.addEventListener('focus', ()=>{//When the user is on the message field
			message.field.removeAttribute('placeholder'); //Remove the placeholder
			message.label.style = 'opacity: 1; transform: translateY(0); transition: transform 0.1s ease-in-out;'; //... and show the label text
			message.field.style = 'border-color: var(--blue);';
			fieldValidity.message();
		}, false);

		//message field validation
		message.field.addEventListener('keydown', ()=>{

			if (message.field.value != " " || message.field.value != "" || message.field.value != null) {//If the field is not empty
				message.error.innerHTML = ""; //... do not display any error message
				message.field.style = 'border-color: var(--blue);';
			}
			if (message.field.value == " " || message.field.value == "" || message.field.value == null) {//If the field is empty
				message.error.innerHTML = errorMessage.message; //... display an error message to inform the user
			}

			fieldValidity.message();

			submitable();

		}, false);

		message.field.addEventListener('keyup', ()=>{

			if (message.field.value != " " || message.field.value != "" || message.field.value != null) {
				message.error.innerHTML = "";
			}
			if (message.field.value == " " || message.field.value == "" || message.field.value == null) {
				message.error.innerHTML = errorMessage.message;
			}

			fieldValidity.message();

			submitable();

		}, false);

		message.field.addEventListener('blur', ()=>{//When the user leaves the field

			if (message.field.value == " " || message.field.value == "" || message.field.value == null) {//... and the field is empty
				message.field.setAttribute('placeholder', 'Leave Us A Message*'); //Restore placeholder
				message.field.style = 'border-color: var(--exclude);';
				message.label.style = 'opacity: 0; transform: translateY(7px); transition: none;'; //... hide the label text
				message.error.innerHTML = errorMessage.message; //... and inform the user that the field is empty
			} else if (message.field.value != " " || message.field.value != "" || message.field.value != null) {//If the field is not empty
				message.error.innerHTML = ""; //... do not display any error message
			}
			fieldValidity.message();

		}, false);
	};

	contactForm();

}

window.addEventListener('DOMContentLoaded', validate); //Run srcipt after page loads