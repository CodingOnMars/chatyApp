// Burger menu
const menuBurger = document.querySelector('.menu-burger');
// const menuList = document.querySelector('.menu__list');
const menuButtons = document.querySelector('.menu-buttons');

menuBurger.addEventListener('click', () => {
	menuBurger.classList.toggle('menu-burger--active');
	menuButtons.classList.toggle('menu-buttons--active');
	// menuList.classList.toggle('menu__list--active');
});
