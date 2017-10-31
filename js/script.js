(function() {

$('button').on('click', function() { // Flip Button

	$('.coin-flip').css('display','block');

	function getHeadsOrTails() {
		return Math.floor(Math.random() * 2);
	}

	let flip = getHeadsOrTails();

	if (flip > 0.5) {
		var result = "heads";
	} else {
		result = "tails";
	}

	let guess = $('input').val().toLowerCase();

	if (guess !== 'heads' && guess !== 'tails') {
		$('#validate').text('Please enter a guess');
		$('#validate').css('color', 'red');
		return;
	}

	$('#display-result').text(result);

	if (guess === result) {
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
