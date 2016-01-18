//Define a variable here called "animals" that is equal to an array with 6 different animals repeated once each. You should have a total of 12 animals.
var animals=["elephant","lion","panda","zebra","giraffe","cheetah","elephant","lion","panda","zebra","giraffe","cheetah"];
function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	
	//Return the variable "array"
	return array;
}

//Call the function "shuffleArray" passing in "animals" as the parameter
shuffleArray("animals");
//Write the beginning of a FOR loop from 1 to 12 inclusive
for(var i=1; i<13; i++) {
	document
		.getElementById("c" + i)
		.innerHTML = "<span class='animal'>" + animals[i - 1] + "</span>";
}

//Define a variable here called pickedAnimals and set it to a blank array
var pickedAnimals=[];
var spaces = document.getElementsByTagName("td");

for(var i=0; i<12; i++) {
//Write the beginning of a FOR loop from 0 to 11 inclusive
	spaces[i].addEventListener("click", function() {
		if (this.classList.contains("success")) {
			return false;
		} else {
			var animalSelected = this.childNodes[0];
			var idSelected = this.getAttribute("id");

			pickedAnimals.push(
				{
					animal: animalSelected.innerHTML,
					id: idSelected
				}
			);

			animalSelected
				.classList
				.remove("animal");

			setTimeout(function() {
				//Call the function "checkWin"
				checkWin();
			}, 500);
		}
	});
}

function resetArray() {
	//Set the variable "pickedAnimals" to a blank array
	pickedAnimals=[];
}

function checkWin() {
	if (pickedAnimals.length === 2) {
		if (pickedAnimals[0].animal === pickedAnimals[1].animal) {
			//Write the beginning of a FOR loop from 0 to 1 inclusive
			for (var i = 0; i <2; i++) {
				document
					.getElementById(pickedAnimals[i].id)
					.classList
					.add("success");
			}		
			resetArray();
			//Call the function "resetArray" here
		} else {
			//Write an alert here to indicate to the user that the animals they selected didn't match
			alert("The animals don't match!");
			//Write the beginning of a FOR loop from 0 to 1 inclusive
			for(var i=0; i<2; i++) {
				document
					.getElementById(pickedAnimals[i].id)
					.childNodes[0]
					.classList
					.add("animal");
			}
			resetArray();
			//Call the function "resetArray"
		}
	}
}