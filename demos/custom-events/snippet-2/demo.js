
$('form').submit(function(e) {
    e.preventDefault();
    var term = $('#search_term').val();
    $('#twitter').trigger('getResults', [ term ]);
});

$('#get_trends').click(function() {
    $('#twitter').trigger('getTrends');
});    
