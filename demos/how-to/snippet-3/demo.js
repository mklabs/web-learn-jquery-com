
$(window).bind('hashchange', function(){
	tabContainers.hide();
	tabContainers.filter(this.hash).show();
$('div.tabs ul.tabNavigation a').removeClass('selected');
	$(this).addClass('selected');
	return false;
});
