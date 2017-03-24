jesswood [4:37 PM] 
var turn = 0;
var tic = 'O';
var player = 'Player 1';


$('.box').click(function() {
    
    if($(this).html()==="") {
        if (turn%2 !== 0) {
            tic = "X";
            player = 'Player 2';
        } else {
            tic = "O";
            player = 'Player 1';
        }
        $(this).html(tic);
        checkWin();
        turn++;
    }

});

$('#reset').click(function() {
    $('.box').html('');
    turn = 0;
});

function checkWin() {
    if ($('#b1').html()===tic && $('#b2').html()===tic && $('#b3').html()===tic) {
        alert(player + " won!");

    } else if ($('#b4').html()===tic && $('#b5').html()===tic && $('#b6').html()===tic) {
        alert(player + " won!");

    } else if ($('#b7').html()===tic && $('#b8').html()===tic && $('#b9').html()===tic) {
        alert(player + " won!");

    }    else if ($('#b1').html()===tic && $('#b4').html()===tic && $('#b7').html()===tic) {
        alert(player + " won!");

    }    else if ($('#b2').html()===tic && $('#b5').html()===tic && $('#b8').html()===tic) {
        alert(player + " won!");

    }    else if ($('#b3').html()===tic && $('#b6').html()===tic && $('#b9').html()===tic) {
        alert(player + " won!");
    
    }    else if ($('#b3').html()===tic && $('#b5').html()===tic && $('#b7').html()===tic) {
        alert(player + " won!");
    
    }    else if ($('#b1').html()===tic && $('#b5').html()===tic && $('#b9').html()===tic) {
        alert(player + " won!");
    // are all boxes checked?
    }     else if (turn === :sunglasses:  {
        alert("It's a Tie!");
    } else {

    }
}