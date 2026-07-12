import { a as Navigation, s as Swiper } from "./main.min.js";
import { t as Scrollbar } from "./scrollbar.min.js";
//#region src/components/custom/explore/explore.js
function initExploreSlider() {
	const slider = document.querySelector("[data-fls-slider-explore]");
	if (!slider) return;
	const section = slider.closest("[data-fls-explore]");
	new Swiper(slider, {
		modules: [Navigation, Scrollbar],
		observer: true,
		observeParents: true,
		autoHeight: true,
		spaceBetween: 30,
		speed: 800,
		scrollbar: {
			el: ".swiper-scrollbar",
			draggable: true
		},
		breakpoints: {
			640: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20
			}
		},
		navigation: {
			prevEl: section.querySelector(".swiper-button-prev"),
			nextEl: section.querySelector(".swiper-button-next")
		}
	});
}
document.querySelector("[data-fls-slider-explore]") && window.addEventListener("load", initExploreSlider);
//#endregion
