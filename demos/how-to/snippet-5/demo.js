
	$('.coda-slider-wrapper ul a.current')
	  .parent() // moves up to the li element
	  .next() // moves to the adjacent li element
	  .find('a') // moves down to the link
	  .click(); // triggers a click on the next link
