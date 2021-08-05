// Burger menu
const menuBurger = document.querySelector('.menu-burger');
// const menuList = document.querySelector('.menu__list');
const menuButtons = document.querySelector('.menu-buttons');

menuBurger.addEventListener('click', () => {
	menuBurger.classList.toggle('menu-burger--active');
	menuButtons.classList.toggle('menu-buttons--active');
	// menuList.classList.toggle('menu__list--active');
});

//////////////////////////////////////////////////////////////////////////////////

// Authorisation
// Open login form
const loginBtn = document.querySelector('.login-btn');
const popupLogin = document.querySelector('.popup-login');
const overlay = document.querySelector('.overlay');
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

loginBtn.addEventListener('click', openLoginForm);
btnCloseLoginForm.addEventListener('click', closeLoginForm);
overlay.addEventListener('click', closeLoginForm);

// Login form validation
const loginForm = document.querySelector('.login-form');
const loginPhone = document.querySelector('[data-login-phone]');
const loginPassword = document.querySelector('[data-login-password]');
const formErrors = document.querySelectorAll('.form__error');
const phoneError = document.querySelector('[data-phone-error]');
const passwordError = document.querySelector('[data-password-error]');

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

function clearErrors() {
	formErrors.forEach(el => {
		el.classList.remove('form__error---active');
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
