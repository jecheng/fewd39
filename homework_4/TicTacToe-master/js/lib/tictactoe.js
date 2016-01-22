var currentTurn = "O";

var spaces = document.getElementsByTagName("td");

for (var i = 0; i < 9; i++) {
	spaces[i].addEventListener("click", function() {
		if (this.innerHTML === "") {
			if (currentTurn === "X") {
				currentTurn = "O";
			} else {
				currentTurn = "X";
			}

			this.innerHTML = currentTurn;

			checkWin();
		} else {
			return false;
		}
	});
}

function checkWin() {
	function getPlace(selector) {
		return document.getElementById(selector).innerHTML;
	}

	var rowA = [getPlace("a1"), getPlace("a2"), getPlace("a3")];
	var rowB = [getPlace("b1"), getPlace("b2"), getPlace("b3")];
	var rowC = [getPlace("c1"), getPlace("c2"), getPlace("c3")];

	var colA = [getPlace("a1"), getPlace("b1"), getPlace("c1")];
	var colB = [getPlace("a2"), getPlace("b2"), getPlace("c2")];
	var colC = [getPlace("a3"), getPlace("b3"), getPlace("c3")];

	var diagA = [getPlace("a1"), getPlace("b2"), getPlace("c3")];
	var diagB = [getPlace("a3"), getPlace("b2"), getPlace("c1")];

	var fullSet = [rowA, rowB, rowC, colA, colB, colC, diagA, diagB];

	for (var i = 0; i < 8; i++) {
		if (fullSet[i][0] !== "" && fullSet[i][1] !== "" && fullSet[i][2] !== "" && fullSet[i][0] === fullSet[i][1] && fullSet[i][0] === fullSet[i][2]) {
			alert(currentTurn + " Wins!");
		}
	}
}