console.log("I am working!");

//variables for playing boxes
var wins = [
	['#box1', '#box2', '#box3'],
	['#box4', '#box5', '#box6'],
	['#box7', '#box8', '#box9'],
	['#box1', '#box5', '#box9'],
	['#box1', '#box4', '#box7'],
	['#box2', '#box5', '#box8'],
	['#box3', '#box6', '#box9'],
	['#box3', '#box5', '#box7'],
];

$(document).ready(function () {
	console.log("jQuery ready for action!");
	var currentPlayer = "x";
	$('.borders').click(function(event) {
		/*If the current player equals x, on the click of the
		.borders class the background will change to purple and
		the current player variable changes to "o"*/
		if (currentPlayer === "x") {
			var gryffindor = $(this).append('<img src="images/gryffindor.png">');
			gryffindor.addClass('gryffindor');
			$(this).unbind("click");
			currentPlayer = "o";
		} else {
			var slytherin = $(this).append('<img src="images/slytherin.png">');
			slytherin.addClass('slytherin');
			$(this).unbind("click");
			currentPlayer = "x";
		}

		/*$.each(wins, function(index, value) {
		console.log(wins);
		if (wins === gryffindor) {
			console.log("Player 1 wins!");
		} else if (
			(wins === ravenclaw)) {
			console.log("Player 2 wins!");
		} else (
			console.log("It's a tie")
		);

	});*/
	});
		$('#reset-btn').click(function(reset) {
			console.log(reset);
			console.log(this);
			$('.gryffindor img').hide();
			location.reload(true);
		});

});

