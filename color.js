var numCubes = 6;
var colors = generateColor(numCubes);
var cubes = document.querySelectorAll(".cube");
var correctAnswer = randomColor();
var display = document.querySelector("#answer");
var result = document.querySelector("#result");
var reset = document.querySelector("#reset");
var h1 = document.querySelector("h1");

var hardBtn = document.querySelector("#hardBtn");
var easyBtn = document.querySelector("#easyBtn");
//forget to include # in front of id 


display.textContent = correctAnswer;

hardBtn.addEventListener("click",function(){
numCubes = 6;
hardBtn.classList.add("selected");
easyBtn.classList.remove("selected");
colors = generateColor(numCubes);
correctAnswer = randomColor();
display.textContent = correctAnswer;
fillColor();
})

easyBtn.addEventListener("click",function(){
numCubes=3;
hardBtn.classList.remove("selected");
easyBtn.classList.add("selected");
colors = generateColor(numCubes);
correctAnswer = randomColor();
display.textContent = correctAnswer;
fill_black();
fillColor();

})

function fillColor(){
	for (var i = 0; i <colors.length; i++) {
	cubes[i].style.backgroundColor = colors[i];
	}
}

function fill_black(){
	for (var i = 3; i <6; i++){
		cubes[i].style.backgroundColor = "#232323";
// style.display = "none"
	}
}

// function for reset
reset.addEventListener("click",function(){
colors = generateColor(numCubes);
correctAnswer = randomColor();
fillColor();
result.textContent = "";

})

// mistake, try to addEventListener on a list of object 

for (var i = 0; i <colors.length; i++) {
	cubes[i].style.backgroundColor = colors[i];
	cubes[i].addEventListener("click",function(){
		var currentColor = this.style.backgroundColor;
		if( currentColor== correctAnswer){
			changeColor(correctAnswer);
			result.textContent = "Congrats";
			reset.textContent = "Play Again";
			h1.style.backgroundColor = correctAnswer;
		}
		else{
			this.style.backgroundColor = "#232323";
			result.textContent = "Try again";
			// this.classList.add("wrong");
		}
	})
}

function changeColor(thisColor){
	for (var i = 0; i < colors.length; i++) {
		cubes[i].style.backgroundColor = thisColor;
	}
}

function randomColor(){
	var index = Math.floor(Math.random()*colors.length);
	return colors[index];
}

function generateColor(num){
arr = [];
	for (var i = 0; i < num; i++) {
		arr[i] = rgbGenerator();
	}
	return arr;
}

function rgbGenerator(){
	r = Math.floor(Math.random()*256);
	g = Math.floor(Math.random()*256);
	b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}


