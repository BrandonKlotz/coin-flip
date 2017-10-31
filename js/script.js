(function() {

	let totalHeads = 0;
	let totalTails = 0;
	let totalCorrect = 0;
 	let totalWrong = 0;

	updateDisplay();


	$('.guess').on('keypress' , function(event) {
		if (event.key === 'Enter') {
			flipTheCoin();
		}
	});
	$('#flip-button').on('click', function(){
		flipTheCoin();
	});

function getHeadsOrTails() {
	return Math.floor(Math.random() * 2);
}

function flipTheCoin() {
	$('.coin-flip').css('display','block');
	let flip = getHeadsOrTails();

	if (flip > 0.5) {
		totalHeads++;
		var result = "heads";
	} else {
		totalTails++;
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
		totalCorrect++;
		$('#validate').text("Nice guess! You got it right.");
		$('#validate').css('color', 'green');
		$('#emoji').text('');
		$('#emoji').text('😃');
	} else {
		totalWrong++;
		$('#validate').text("Your guess was incorrect.");
		$('#validate').css('color', 'red');
		$('#emoji').text('');
		$('#emoji').text('☹️');
	}

	updateDisplay();

	}

	function updateDisplay() {
		$('.totalHeads').text(totalHeads);
		$('.totalTails').text(totalTails);
		$('.totalCorrect').text(totalCorrect);
		$('.totalWrong').text(totalWrong);
	}

})();
