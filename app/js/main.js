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
const formInputs = document.querySelectorAll('.form__input');
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
const phoneError = document.querySelector('#login-phone-error');
const passwordError = document.querySelector('#login-password-error');

loginForm.addEventListener('submit', e => {
	clearErrors();

	let errorMessages = [];

	if (loginPhone.value < 11) {
		errorMessages.push('Phone error');
		phoneError.classList.add('form__error--active');
		loginPhone.classList.add('form__input--error');
	} else {
		phoneError.classList.remove('form__error--active');
		loginPhone.classList.remove('form__input--error');
	}

	if (loginPassword.value < 1) {
		errorMessages.push('Password error');
		passwordError.classList.add('form__error--active');
		loginPassword.classList.add('form__input--error');
	} else {
		passwordError.classList.remove('form__error--active');
		loginPassword.classList.remove('form__input--error');
	}

	if (errorMessages.length > 0) {
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
const regPhoneError = document.querySelector('#reg-phone-error');
const regEmailError = document.querySelector('#reg-email-error');
const regPasswordError = document.querySelector('#reg-password-error');
const regPasswordConfirmationError = document.querySelector(
	'#reg-password-confirmation-error'
);

regForm.addEventListener('submit', e => {
	clearErrors();

	let errorMessages = [];

	if (regPhone.value < 11) {
		errorMessages.push('Phone error');
		regPhoneError.classList.add('form__error--active');
		regPhone.classList.add('form__input--error');
	} else {
		regPhoneError.classList.remove('form__error--active');
		regPhone.classList.remove('form__input--error');
	}

	if (regEmail.value < 1) {
		errorMessages.push('Email error');
		regEmailError.classList.add('form__error--active');
		regEmail.classList.add('form__input--error');
	} else {
		emailError.classList.remove('form__error--active');
		regEmail.classList.remove('form__input--error');
	}

	if (regPassword.value < 1) {
		errorMessages.push('Password error');
		regPasswordError.classList.add('form__error--active');
		regPassword.classList.add('form__input--error');
	} else {
		regPasswordError.classList.remove('form__error--active');
		regPassword.classList.remove('form__input--error');
	}

	if (regPasswordConfirmation.value !== regPassword.value) {
		errorMessages.push('Passwords do not match');
		regPasswordConfirmationError.classList.add('form__error--active');
		regPasswordConfirmation.classList.add('form__input--error');
	}

	if (errorMessages.length > 0) {
		e.preventDefault();
	}
});

function clearErrors() {
	formErrors.forEach(el => {
		el.classList.remove('form__error--active');
	});
	formInputs.forEach(el => {
		el.classList.remove('form__input--error');
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
