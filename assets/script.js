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

let leftArrow=document.getElementById("arrow_left");
	leftArrow.addEventListener("click", function(){
		console.log("précédent");
		index--;
		//si l'index est inférieur à 0, on le remet à la longueur du tableau - 1
    	if (index < 0) {
        index = slides.length - 1;
    	}
		console.log(index);
	});

let rightArrow=document.getElementById("arrow_right");
	rightArrow.addEventListener("click", function(){
		console.log("suivant");
		index++;
		//si l'index est supérieur ou égal à la longueur du tableau, on le remet à 0
		if (index >= slides.length) {
			index = 0;
		}
		console.log(index);
	});

//recuperer la classe de la div qui contient les points
let dotsDiv=document.querySelector(".dots");

//variable qui contient le code HTML de la div qui contiendra les points
let dotCode ="<div class='dot'></div>"

//boucle pour créer les points
for (let i=0; i<slides.length; i++){
	dotsDiv.innerHTML+=dotCode;
}
