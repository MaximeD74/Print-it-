const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const dots = document.querySelector('.dots');
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const img = document.querySelector('.banner-img');
const txt = document.querySelector('.banner-txt');

let currentSlide = 0;

for (let i = 0; i < slides.length; i++) {
	const newDot = document.createElement('div');
	newDot.className = 'dot';
	dots.appendChild(newDot);	
}

let dot = document.querySelectorAll('.dot');
dot[0].classList.add('dot_selected');

function updateDots() {
	for (let i = 0; i < dot.length; i++) {
		if (i === currentSlide) {
			dot[i].classList.add('dot_selected');
		} else {
			dot[i].classList.remove('dot_selected');
		}
	}
}

leftArrow.addEventListener('click', function() {
	currentSlide--;
	if (currentSlide === -1) {
		currentSlide = slides.length - 1;
	}
	img.src = slides[currentSlide].image;
	txt.innerHTML = slides[currentSlide].tagLine;
	updateDots();
});

rightArrow.addEventListener('click', function() {
	currentSlide++;
	if (currentSlide === slides.length) {
		currentSlide = 0;
	}
	img.src = slides[currentSlide].image;
	txt.innerHTML = slides[currentSlide].tagLine;
	updateDots();
});

