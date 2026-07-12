import { a as Navigation, s as Swiper } from "./main.min.js";
import { t as Pagination } from "./pagination.min.js";
/* empty css              */
/* empty css         */
//#region src/components/pages/index/index.js
function initFeaturedSlider() {
	const sliders = document.querySelectorAll("[data-fls-slider-featured]");
	if (!sliders.length) return;
	sliders.forEach((slider) => {
		new Swiper(slider, {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,
			effect: "fade",
			fadeEffect: { crossFade: true },
			navigation: {
				prevEl: slider.querySelector(".swiper-button-prev"),
				nextEl: slider.querySelector(".swiper-button-next")
			}
		});
	});
}
function initSectionSlider() {
	const sectionSlider = document.querySelector("[data-fls-slider-section]");
	if (!sectionSlider) return;
	new Swiper(sectionSlider, {
		modules: [Pagination],
		observer: true,
		observeParents: true,
		spaceBetween: 15,
		speed: 800,
		autoHeight: true,
		breakpoints: {
			640: {
				slidesPerView: 1,
				spaceBetween: 15
			},
			767: { slidesPerView: 2 },
			1100: {
				slidesPerView: 3,
				spaceBetween: 30
			}
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		}
	});
}
document.querySelector("[data-fls-slider-featured]") && window.addEventListener("load", initFeaturedSlider);
document.querySelector("[data-fls-slider-section]") && window.addEventListener("load", initSectionSlider);
//#endregion
