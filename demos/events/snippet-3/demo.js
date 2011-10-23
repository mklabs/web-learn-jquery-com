
// function addItemNS() {
  $('#list7 li.special button')
.unbind('click.addit')
.bind('click.addit', function() {
  var $newLi = $('&lt;li class="special"&gt;special and new &lt;button&gt;I am new&lt;/button&gt;&lt;/li&gt;');
  $(this).parent().after($newLi);
  addItemNS();
  });
}
$(document).ready(function() {
  addItemNS();
 
  // non-rebinding click handler
  $('#list7 li.special button').click(function() {
$(this).after(' pressed');
  });
});
