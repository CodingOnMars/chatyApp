// Burger menu
const menuBurger = document.querySelector('.menu-burger');
// const menuList = document.querySelector('.menu__list');
const menuButtons = document.querySelector('.menu-buttons');

menuBurger.addEventListener('click', () => {
	menuBurger.classList.toggle('menu-burger--active');
	menuButtons.classList.toggle('menu-buttons--active');
	// menuList.classList.toggle('menu__list--active');
});

// Slider
$('.plans__items').slick({
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
