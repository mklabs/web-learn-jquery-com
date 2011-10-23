
// function addItemUnbind() {
  $('#list6 li.special button')
.unbind('click')
.bind('click', function() {
  var $newLi = $('&lt;li class="special"&gt;special and new &lt;button&gt;I am new&lt;/button&gt;&lt;/li&gt;');
  $(this).parent().after($newLi);
  addItemUnbind();
  });
}
$(document).ready(function() {
  addItemUnbind();
 
  // non-rebinding click handler
  $('#list6 li.special button').click(function() {
$(this).after(' pressed');
  });
});
