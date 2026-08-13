let name=prompt("A name:");
let adjective=prompt("An adjective:");
let noun=prompt("A noun:");
let food=prompt("A food:");
let game=prompt("A game:");
let style=prompt("fancy or silly?");



let closings=[
	"You are a Legend!",
	"Stay Golden.",
	"Signs point to Awesome.",
	"You got this!",
	"You are Amazing!",
	"Greatness is within you.",
	"You are a Masterpiece.",
	"You can do it!"

	];
	
	
	
function randomNumber(a,b){
	return Math.floor(Math.random() * (b - a + 1)) + a;
}



function makeCard(){
	if(style.toLowerCase()==="fancy"){
		console.log("Dearest " + name + ",");
	}else{
		console.log("Yo " + name + "!");
	}
	
	
	console.log("You are very " + adjective + " , may people bring you plenty of " + noun + "s on your Birthday!");
	console.log("If you eat more " + food + " and play more " + game + ", you'll live longer!");
	
	let index=randomNumber(0,closings.length - 1);
	console.log(closings[index]);
	
}



makeCard();


