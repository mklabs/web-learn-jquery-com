
var myHtml = '';

$.each(myArray, function(i, item) {
    myHtml += '<li>' + item + '</li>';
});

$('#ballers').html(myHtml);
