const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//indice de la diapo actuelle
let index = 0;
//classe de l'image de la bannière
const bannerImage = document.querySelector(".banner-img");
//classe de la div qui contient le texte de la bannière
const bannerText = document.querySelector("#banner p");
//recuperer la classe de la div qui contient les points
let dotsDiv=document.querySelector(".dots");
//variable qui contient le code HTML de la div qui contiendra les points
let dotCode ="<div class='dot'></div>"
//tableau qui contiendra les points
let dots = [];

//boucle pour créer les points
for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsDiv.appendChild(dot);
    dots.push(dot);
}

if (dots.length > 0) {
    dots[0].classList.add("dot_selected");
    bannerImage.src = `./assets/images/slideshow/${slides[0].image}`;
    bannerText.innerHTML = slides[0].tagLine;
}

let leftArrow=document.querySelector(".arrow_left");
	leftArrow.addEventListener("click", function(){
		console.log("précédent");
		dots[index].classList.remove("dot_selected");
		index--;
		//si l'index est inférieur à 0, on le remet à la longueur du tableau - 1
    	if (index < 0) {
        index = slides.length - 1;
    	}
		dots[index].classList.add("dot_selected");
		bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;
		bannerText.innerHTML = slides[index].tagLine;
		console.log(index);
	});

let rightArrow=document.querySelector(".arrow_right");
	rightArrow.addEventListener("click", function(){
		console.log("suivant");
		//supprimer la classe dot_selected de l'élément actuel
		dots[index].classList.remove("dot_selected");
		index++;
		//si l'index est supérieur ou égal à la longueur du tableau, on le remet à 0
		if (index >= slides.length) {
			index = 0;
		}
		//ajouter la classe dot_selected à l'élément suivant
		dots[index].classList.add("dot_selected");
		//modifier l'image de la bannière
		bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;
		//modifier le texte de la bannière
		bannerText.innerHTML = slides[index].tagLine;
		console.log(index);
	});




