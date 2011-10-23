
var frag = document.createDocumentFragment();

$.each(myArray, function (i, item) {
    var newListItem = document.createElement("li");
    var itemText = document.createTextNode(item);
    newListItem.appendChild(itemText);
    frag.appendChild(newListItem);
});

$('#ballers')[0].appendChild(frag);
