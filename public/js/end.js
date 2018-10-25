var name = sessionStorage.getItem('name');
var score = sessionStorage.getItem('score');
var win = sessionStorage.getItem('win');
var congrats;
console.log(win)

if (win === "true") {
	congrats = "Congrats! You have a new high score "
} else if (win === "false") {
	congrats = "Sorry! You did not set a high score "
}

var sentence = "<p>" + congrats + name + "! Your score is " + score + ".</p>";

$("#end-screen").append(sentence);