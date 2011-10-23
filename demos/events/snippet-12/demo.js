
$(document).ready(function() {
  $('#list3 li.special button').click(function() {
var $parent = $(this).parent();
$parent.clone().insertAfter($parent);
  });
});
