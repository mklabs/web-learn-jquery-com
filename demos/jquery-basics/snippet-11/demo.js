
// Moving elements using different approaches

// make the first list item the last list item
var $li = $('#myList li:first').appendTo('#myList');

// another approach to the same problem
$('#myList').append($('#myList li:first'));

// note that there's no way to access the
// list item that we moved, as this returns
// the list itself
