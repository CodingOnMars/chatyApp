// Burger menu
$('.menu-burger').on('click', function () {
	$('.menu-burger, .menu, .menu-buttons').toggleClass('active');
	$('body').toggleClass('lock');
});

// Sticky scroll header
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
	header.classList.toggle('sticky', scrollY > 0);
});

//////////////////////////////////////////////////////////////////////////////////

// Authorisation
// Common classes
const menuBurger = document.querySelector('.menu-burger');
const formFields = document.querySelectorAll('.form__field');
const formErrors = document.querySelectorAll('.form__error');
const overlay = document.querySelector('.overlay');

// Open/close login form
const loginBtn = document.querySelector('.login-btn');
const popupLogin = document.querySelector('.popup-login');
const btnCloseLoginForm = document.querySelector('.login-form__btn-close');

const openLoginForm = () => {
	popupLogin.classList.remove('hidden');
	menuBurger.classList.add('hidden');
	overlay.classList.remove('hidden');
};

const closeLoginForm = () => {
	popupLogin.classList.add('hidden');
	menuBurger.classList.remove('hidden');
	overlay.classList.add('hidden');
};

loginBtn.addEventListener('click', () => {
	openLoginForm();
	clearErrors();
});
btnCloseLoginForm.addEventListener('click', closeLoginForm);

// Open/close registration form
const regBtn = document.querySelector('.register-btn');
const popupReg = document.querySelector('.popup-reg');
const btnCloseRegForm = document.querySelector('.reg-form__btn-close');

const openRegForm = () => {
	popupReg.classList.remove('hidden');
	menuBurger.classList.add('hidden');
	overlay.classList.remove('hidden');
};

const closeRegForm = () => {
	popupReg.classList.add('hidden');
	menuBurger.classList.remove('hidden');
	overlay.classList.add('hidden');
};

regBtn.addEventListener('click', () => {
	openRegForm();
	clearErrors();
});
btnCloseRegForm.addEventListener('click', closeRegForm);

// Close a form by clicking outside of the form
overlay.addEventListener('click', () => {
	closeLoginForm();
	closeRegForm();
});

// Login form validation
const loginForm = document.querySelector('.login-form');
const loginPhone = document.querySelector('#login-phone');
const loginPassword = document.querySelector('#login-password');

loginForm.addEventListener('submit', e => {
	let isPhoneValid = checkPhone(loginPhone);
	isPasswordValid = checkLoginPassword(loginPassword);

	let isFormValid = isPhoneValid && isPasswordValid;

	if (!isFormValid) {
		e.preventDefault();
	}
});

// Registration form validation
const regForm = document.querySelector('.reg-form');
const regPhone = document.querySelector('#reg-phone');
const regEmail = document.querySelector('#reg-email');
const regPassword = document.querySelector('#reg-password');
const regPasswordConfirmation = document.querySelector(
	'#reg-password-confirmation'
);

regForm.addEventListener('submit', e => {
	let isPhoneValid = checkPhone(regPhone),
		isEmailValid = checkEmail(),
		isPasswordValid = checkPassword(regPassword),
		isConfirmPasswordValid = checkConfirmPassowrd();

	let isFormValid =
		isPhoneValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;

	if (!isFormValid) {
		e.preventDefault();
	}
});

// Input validation funtions

// Check if entered value is empty
function isRequired(value) {
	return value === '' ? false : true;
}

// Check if phone input is following the pattern
function isPhoneCorrect(phone) {
	const re =
		/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
	return re.test(phone);
}

// Check if password contains at least 8 characters. including at least one lower case letter, one uppercase letter, one number, one symbol
function isPasswordSecure(password) {
	const re = new RegExp(
		'^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
	);
	return re.test(password);
}

// Show error message, highligh input field with red color
function showError(input, message) {
	const formField = input.parentElement;
	const errorMessage = formField.querySelector('small');

	formField.classList.remove('valid');
	formField.classList.add('error');

	errorMessage.classList.add('form__error--active');
	errorMessage.textContent = message;
}

// Remove error message, highligh input field with green color
function showValid(input) {
	const formField = input.parentElement;
	const errorMessage = formField.querySelector('small');

	formField.classList.remove('error');
	formField.classList.add('valid');

	errorMessage.classList.remove('form__error--active');
	errorMessage.textContent = '';
}

// Validate phone input
function checkPhone(phone) {
	let valid = false;

	const phoneInput = phone.value.trim();

	if (!isRequired(phoneInput)) {
		showError(phone, 'Введите номер телефона');
	} else if (!isPhoneCorrect(phoneInput)) {
		showError(phone, 'Введите номер в формате +7(ххх)-ххх-хх-хх');
	} else {
		showValid(phone);
		valid = true;
	}

	return valid;
}

// Validate login password input
function checkLoginPassword() {
	let valid = false;

	let loginPasswordInput = loginPassword.value.trim();

	if (!isRequired(loginPasswordInput)) {
		showError(loginPassword, 'Введите пароль');
	} else {
		showValid(loginPassword);
		valid = true;
	}

	return valid;
}

// Validate email input for registartion form
function checkEmail() {
	let valid = false;

	const email = regEmail.value.trim();

	if (!isRequired(email)) {
		showError(regEmail, 'Введите email');
	} else {
		showValid(regEmail);
		valid = true;
	}

	return valid;
}

// Validate password input
function checkPassword(password) {
	let valid = false;

	const passwordInput = password.value.trim();

	if (!isRequired(passwordInput)) {
		showError(password, 'Введите пароль');
	} else if (!isPasswordSecure(passwordInput)) {
		showError(
			password,
			'Пароль должен быть не менее 8 символов и содержать комбинацию букв разного регистра, цифр и символов (!#$%&?)'
		);
	} else {
		showValid(password);
		valid = true;
	}

	return valid;
}

// Validate password confirmation for registartion form
function checkConfirmPassowrd() {
	let valid = false;

	const confirmPassword = regPasswordConfirmation.value.trim();
	const password = regPassword.value.trim();

	if (!isRequired(confirmPassword)) {
		showError(regPasswordConfirmation, 'Пожалуйста, повторите пароль');
	} else if (confirmPassword !== password) {
		showError(regPasswordConfirmation, 'Введенные пароли не совпадают');
	} else {
		showValid(regPasswordConfirmation);
		valid = true;
	}

	return valid;
}

// Clear error messages, remove input highlight
function clearErrors() {
	formErrors.forEach(el => {
		el.classList.remove('form__error--active');
	});
	formFields.forEach(el => {
		el.classList.remove('error');
	});
}

//////////////////////////////////////////////////////////////////////////////////

// Slider
$(function () {
	$('.slider').slick({
		arrows: false,
		dots: true,
		infinite: false,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 1023,
				settings: 'unslick',
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 766,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
});
