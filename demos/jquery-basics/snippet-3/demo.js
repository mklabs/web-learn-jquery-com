
// Restoring your original selection using $.fn.end

$('#content')
	.find('h3')
	.eq(2)
    	.html('new text for the third h3!')
	.end() // restores the selection to all h3's in #content
	.eq(0)
    	.html('new text for the first h3!');
