$(function () {
	$('.bike-slider, .slider__items').slick({
		arrows: false,
		dots: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000,
	});
});

const iconMenu = document.querySelector('.menu__icon');
const menuList = document.querySelector('.menu__list');

if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		iconMenu.classList.toggle('_active');
		menuList.classList.toggle('_active');
	})
}