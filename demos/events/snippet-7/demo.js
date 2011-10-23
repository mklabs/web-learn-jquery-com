
$(document).ready(function() {
  addItem();
 
  // non-rebinding click handler ...
  $('#list5 li.special button').click(function() {
$(this).after(' pressed');
  });
});
