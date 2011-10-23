
// function addRemoveItemNS() {
  var $newLi = $('&lt;li class="special"&gt;special and new &lt;button class="addone"&gt;I am new&lt;/button&gt; &lt;button class="removeme"&gt;remove me&lt;/button&gt;&lt;/li&gt;');
 
$('#list9 li.special')
  .find('button.addone')
.unbind('click.addit')
.bind('click.addit', function() {
  $(this).parent().after($newLi);
  addRemoveItemNS();
  })
  .end()
  .find('button.removeme')
  .unbind('click.removeit')
  .bind('click.removeit', function() {
$(this).parent().remove();
  });
}
 
$(document).ready(function() {
  addRemoveItemNS();
});
