var response = prompt("What was your best marathon time?");

if (response>4 && response<=5) {
  alert("average!");
}
else if (response>2 && response<=4) {
  alert("excellent!");
}
else if (response>5) {
  alert("speed up!");
}
else{
  alert("Please enter an integer")
}
