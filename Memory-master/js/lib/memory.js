var animals = ["Dog", "Cat", "Lizard", "Kangaroo", "Octopus", "Tiger", "Dog", "Cat", "Lizard", "Kangaroo", "Octopus", "Tiger"];

function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	
	return array;
}

shuffleArray(animals);

for (var i = 1; i < 13; i++) {
	document
		.getElementById("c" + i)
		.innerHTML = "<span class='animal'>" + animals[i - 1] + "</span>";
}

var pickedAnimals = [];

var spaces = document.getElementsByTagName("td");

for (var i = 0; i < 12; i++) {
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
				checkWin();
			}, 500);
		}
	});
}

function resetArray() {
	pickedAnimals = [];
}

function checkWin() {
	if (pickedAnimals.length === 2) {
		if (pickedAnimals[0].animal === pickedAnimals[1].animal) {
			for (var i = 0; i < 2; i++) {
				document
					.getElementById(pickedAnimals[i].id)
					.classList
					.add("success");
			}		

			resetArray();
		} else {
			alert("Sorry... No match!");

			for (var i = 0; i < 2; i++) {
				document
					.getElementById(pickedAnimals[i].id)
					.childNodes[0]
					.classList
					.add("animal");
			}

			resetArray();
		}
	}
}