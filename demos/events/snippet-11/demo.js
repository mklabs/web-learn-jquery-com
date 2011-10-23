
$(document).ready(function() {
  $('#list4 li.special button').click(function() {
var $parent = $(this).parent();
$parent.clone(true).append(' I\'m a clone!').insertAfter($parent);
  });
});
