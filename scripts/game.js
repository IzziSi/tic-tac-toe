console.log("I am working!");

//variables for playing boxes


$(document).ready(function () {
	console.log("jQuery ready for action!");
	var currentPlayer = "x";
	$('.borders').click(function(event) {
		/*If the current player equals x, on the click of the
		.borders class the background will change to purple and
		the current player variable changes to "o"*/
		if (currentPlayer === "x") {
			$(this).css("background-color", "rgba(0,0,0,1)");
			currentPlayer = "o";
		} else {
			$(this).css("background-color", "green");
			currentPlayer = "x";
		}
		$('#reset-btn').click(function(reset) {
			console.log(reset);
			console.log(this);
		$('.borders').css("background-color", "rgba(0,0,0,0)");
		});
	});
});
