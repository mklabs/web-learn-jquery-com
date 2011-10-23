
// function addItemFinal() {
var $newLi = $('&lt;li class="special"&gt;special and new &lt;button&gt;I am new&lt;/button&gt;&lt;/li&gt;');
$(this).parent().after($newLi);
$('#list8 li.special button')
  .unbind('click', addItemFinal)
  .bind('click', addItemFinal);
}
 
$(document).ready(function() {
$('#list8 li.special button').bind('click', addItemFinal);
 
  // non-rebinding click handler
  $('#list8 li.special button').click(function() {
$(this).after(' pressed');
  });
});
