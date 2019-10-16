document.querySelector('.roll').addEventListener('click', function() {
	var dice = Math.floor(Math.random() * 6) + 1;
	document.querySelector('.dice').src = 'dice-' + dice + '.png';
});
