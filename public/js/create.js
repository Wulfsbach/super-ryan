//variables
var name;
var character;

//user selects new
$("#new").on("click", function() {
	$("#login").toggleClass("hide");
	$("#new-create").toggleClass("hide");
});

//user selects existing
$("#existing").on("click", function() {
	$("#login").toggleClass("hide");
	$("#existing-select").toggleClass("hide");
	$.ajax("/api/player", {
		type: "GET",
	}).then(function(res) {
		for (i=0;i<res.length;i++) {
			var newRow = $(`<tr data='${res[i].user_name}' data-character='${res[i].character}' data-score='${res[i].user_score}'>`);
			var newName = $(`<td> ${res[i].user_name} </td>`);
			var newCharacter = $(`<td> ${res[i].character} </td>`);
			var newHS = $(`<td> ${res[i].user_score} </td>`);
			newRow.append(newName);
			newRow.append(newCharacter);
			newRow.append(newHS);
			$("#existing-character").append(newRow);
		}
	});
});

//user defines name
$("#name-submit").on("click", function(event) {
	event.preventDefault();
	name = $("#name").val();
	$.ajax("/api/player", {
		type: "GET",
	}).then(function(res) {
		var pass1 = true; 
		var pass2 = true;
		if (name.length > 3 || name.length < 3) {
			$("#error-message").text("Your name must be 3 characters long.");
			pass1 = false;
		} 
		for(i=0;i<res.length;i++) {
			if(name === res[i].user_name) {
				$("#error-message").text("This user name has been taken.");
				pass2 = false;
			} 
		} 
		if (pass1 && pass2) {
			$("#new-create").toggleClass("hide");
			$("#new-character").toggleClass("hide");
		}
	});
});

//select character
$(".character").on("click", function() {
	character = $(this).attr("data");
	sessionStorage.setItem('character', character);
	sessionStorage.setItem('name', name);
	sessionStorage.setItem('score', 0);
	$("#new-character").toggleClass("hide");
	$("#your-name").append(name);
	$("#your-picture").attr("src", `/assets/players/${character}.png`)
	$("#start-game").toggleClass("hide");
	var newCharacter = {
		name: name,
		character: character
	};
	$.ajax("/api/player", {
		type: "POST",
		data: newCharacter
	}).then(function() {
		console.log("added character");
	});
})


//select character profile
$("#existing-character").on("click", "tr", function(){
	var name = $(this).attr("data");
	sessionStorage.setItem('name', name);
	var character = $(this).attr("data-character");
	sessionStorage.setItem('character', character);
	var highScore = $(this).attr("data-score");
	sessionStorage.setItem('score', highScore);
	$("#start-game").toggleClass("hide");
	$("#your-name").append(name);
	$("#your-picture").attr("src", `/assets/players/${character}.png`)
	$("#existing-select").toggleClass("hide");
})

