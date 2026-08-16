let nameInput=document.getElementById("name-input");
let adjectiveInput=document.getElementById("adjective-input");
let nounInput=document.getElementById("noun-input");
let foodInput=document.getElementById("food-input");
let gameInput=document.getElementById("game-input");

let makeButton=document.getElementById("make-button");
let cardText=document.getElementById("card-text");

function makeCard(){
	
	let friendName=nameInput.value;
	let adjective=adjectiveInput.value;
	let noun=nounInput.value;
	let food=foodInput.value;
	let game=gameInput.value;
	
	

		
	
	
	
	cardText.textContent=
		"Dear " + friendName + 
		", You are very " + adjective + " , may people bring you plenty of " + noun + "s on your Birthday!" + 
		"  If you eat more " + food + " and play more " + game + ", you'll live longer!";
}

makeButton.addEventListener("click", makeCard);
