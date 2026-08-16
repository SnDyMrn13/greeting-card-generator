let nameInput=document.getElementById("name-input");
let adjectiveInput=document.getElementById("adjective-input");
let nounInput=document.getElementById("noun-input");
let foodInput=document.getElementById("food-input");
let gameInput=document.getElementById("game-input");
let makeButton=document.getElementById("make-button");
let cardText=document.getElementById("card-text");
let index=document.getElementById("closing-text");
let resetButton=document.getElementById("reset-button");
let cardsMade=0;
let bonusLine=document.getElementById("bonus-line");


let closings=[
	"You are Legend!",
	"Stay Golden.",
	"Signs point to Awesome!",
	"You got this!",
	"You are Amazing!",
	"Greatness is within you.",
	"You can do it!",
	"You are Grrreat!",
	
	]
	
function randomNumber(a,b){
	return Math.floor(Math.random() * (b - a + 1)) + a;
		
}
	


	

function makeCard(){
	
	let cardSection=document.getElementById("card-section");
	cardSection.hidden=false;
	let friendName=nameInput.value;
	let adjective=adjectiveInput.value;
	let noun=nounInput.value;
	let food=foodInput.value;
	let game=gameInput.value;
	
	let index=closings[randomNumber(0,closings.length - 1)];
	
	cardText.textContent=
		"Dear " + friendName + 
		".  You are very " + adjective + ",  may people bring you plenty of " + noun + "s on your Birthday! " + 
		"  If you eat more " + food + " and play more " + game + ", you'll live longer!  " + index ;
		
	cardsMade=cardsMade	+ 1;
	if(cardsMade >=5){
		bonusLine.hidden=false;
	}
	
}

function resetGenerator(){
	
	nameInput.value="";
	adjectiveInput.value="";
	nounInput.value="";
	foodInput.value="";
	gameInput.value="";
	let cardSection=document.getElementById("card-section");
	cardSection.hidden=true;
	
	
}
	
	
makeButton.addEventListener("click", makeCard);

resetButton.addEventListener("click",resetGenerator);