(function() {

$('button').on('click', function() { // Flip Button

	$('.coin-flip').css('display','block');

	function coinFlip() {
		return Math.floor(Math.random() * 2);
	}

	let flip = coinFlip();
	if (flip > 0.5) {
		var result = "heads";
	} else {
		result = "tails";
	}

	$('#display-result').text(result);

	var userGuess = $('input').val();

	if (userGuess === result) {
		$('#validate').text("Nice guess! You got it right.");
		$('#validate').css('color', 'green');
		$('#emoji').text('');
		$('#emoji').text('😃');
	} else {
		$('#validate').text("Your guess was incorrect.");
		$('#validate').css('color', 'red');
		$('#emoji').text('');
		$('#emoji').text('☹️');
	}

	$('.coin-flip').fadeOut(3000);

});

})();
