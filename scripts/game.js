$(document).ready(function () {
	console.log("jQuery ready for action!");
	var currentPlayer = "x";
	setTimeout(function() {
		$('#play-btn').fadeIn(3000);
	}, 3000);
	$('.game-board').on('click', '.borders', function() {
		/*If the current player equals x, on the click of the
		.borders class the background will change to purple and
		the current player variable changes to "o"*/
		if (currentPlayer === "x") {
			var gryffindor = $(this).append('<img src="images/gryffindor.png" class="gryffindor">');
			gryffindor.addClass('gryffindor');
			$(this).unbind("click");
			if (checkWins('gryffindor')) {
				alert("Gryffindor wins");
			} else {
				currentPlayer = "o";	
			}

		} else {
			var slytherin = $(this).append('<img src="images/slytherin.png" class="slytherin">');
			slytherin.addClass('slytherin');
			$(this).unbind("click");
			if (checkWins('slytherin')) {
				alert("Slytherin wins!");
			} else {
				currentPlayer = "x";
			}
			
		}	

		$('#reset-btn').click(function(reset) {
			$('.gryffindor img').hide();
			location.reload(true);
		});
	});

});

function checkWins(symbol) {
	if ($('#box1').hasClass(symbol) && $('#box2').hasClass(symbol) && $('#box3').hasClass(symbol)) {
		return true;
	} else if ($('#box4').hasClass(symbol) && $('#box5').hasClass(symbol) && $('#box6').hasClass(symbol)) {
		return true;
	} else if ($('#box7').hasClass(symbol) && $('#box8').hasClass(symbol) && $('#box9').hasClass(symbol)) {
		return true;
	} else if ($('#box1').hasClass(symbol) && $('#box5').hasClass(symbol) && $('#box9').hasClass(symbol)) {
		return true;
	} else if ($('#box1').hasClass(symbol) && $('#box4').hasClass(symbol) && $('#box7').hasClass(symbol)) {
		return true;
	} else if ($('#box2').hasClass(symbol) && $('#box5').hasClass(symbol) && $('#box8').hasClass(symbol)) {
		return true;
	} else if ($('#box3').hasClass(symbol) && $('#box6').hasClass(symbol) && $('#box9').hasClass(symbol)) {
		return true;
	} else if ($('#box3').hasClass(symbol) && $('#box5').hasClass(symbol) && $('#box7').hasClass(symbol)) {
		return true;
	} else {

	}
}
$(function() {
    $('body').removeClass('fade-out');
});
