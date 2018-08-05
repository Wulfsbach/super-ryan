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
			var newRow = $(`<tr data='${res[i].user_name}' data-character='${res[i].character}'>`);
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
	console.log(name);
	$("#new-create").toggleClass("hide");
	$("#new-character").toggleClass("hide");
});

//select character
$(".character").on("click", function() {
	character = $(this).attr("data");
	sessionStorage.setItem('character', character)
	$("#new-character").toggleClass("hide");
	$("#your-name").append(name);
	$("#start-game").toggleClass("hide");
})

//start game 
$("#start-button").on("click", function() {
	var newCharacter = {
		user_name: name,
		character: character
	};
	$.ajax("/api/player", {
		type: "POST",
		data: newCharacter
	}).then(function() {
		console.log("added character");
	});
});

//select character profile
$("#existing-character").on("click", "tr", function(){
	var name = $(this).attr("data");
	var character = $(this).attr("data-character");
	sessionStorage.setItem('character', character);
	$("#start-game").toggleClass("hide");
	$("#your-name").append(name);
	$("#existing-select").toggleClass("hide");
})

