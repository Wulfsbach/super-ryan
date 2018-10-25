$.ajax("/api/highscore", {
    type: "GET",
}).then(function(res) {
    for (i=0;i<5;i++) {
        var newRow = $(`<tr>`);
        var name = $(`<td> ${res[i].user_name} </td>`);
        var newHS = $(`<td> ${res[i].user_score} </td>`);
        newRow.append(name);
        newRow.append(newHS);
        $("#high_score").append(newRow);
    }
});