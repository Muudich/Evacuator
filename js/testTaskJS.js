const reviewsSwiper = new Swiper('.reviews-swiper', {	
	loop: true,
 
	// Navigation arrows
	navigation: {
	  nextEl: '.reviews-swiper .swiper-button-next',
	  prevEl: '.reviews-swiper .swiper-button-prev',
	},
});


const infoSwiper = new Swiper('.information-weight-swiper', 
{
	slideClass: 'slide',
	wrapperClass: 'information-weight-swiper-wrapper',
	observer: true,
	observeParents: true,
	slidesPerView: 2,
	navigation: {
		nextEl: '.information-weight-swiper .swiper-button-next',
		prevEl: '.information-weight-swiper .swiper-button-prev',
	},
});

const offset = 100;
const scrollUp = document.querySelector('.scroll-up');

window.addEventListener('scroll', trackScroll);

function trackScroll(){
	const offset = window.scrollY;
	const coords = document.documentElement.clientHeight;
	if (offset > coords) {
		scrollUp.classList.add("scroll-up--active");
	} else {
		scrollUp.classList.remove("scroll-up--active");
	}
}

//click
scrollUp.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});
