import { s as Swiper } from "./main.min.js";
import { t as Scrollbar } from "./scrollbar.min.js";
/* empty css         */
//#region src/components/pages/cities/cities.js
function initCitiesSlider() {
	const slider = document.querySelector("[data-fls-slider-cities]");
	if (!slider) return;
	new Swiper(slider, {
		modules: [Scrollbar],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 20,
		speed: 800,
		scrollbar: {
			el: ".swiper-scrollbar",
			draggable: true
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			992: {
				slidesPerView: "auto",
				spaceBetween: 42
			}
		}
	});
}
document.querySelector("[data-fls-slider-cities]") && window.addEventListener("load", initCitiesSlider);
//#endregion
