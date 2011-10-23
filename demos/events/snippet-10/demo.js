
// function addItem() {
  $('#list5 li.special button').click(function() {
var $newLi = $('&lt;li class="special"&gt;special and new &lt;button&gt;I am new&lt;/button&gt;&lt;/li&gt;');
$(this).parent().after($newLi);
  });  
}
