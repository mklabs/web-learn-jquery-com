
$.each(['refresh', 'expand', 'collapse'], function(i, ev) {
    $('#' + ev).click(function(e) { $('#twitter div.results').trigger(ev); });
});

$('#remove').click(function(e) {
    if (confirm('Remove all results?')) {
        $('#twitter div.results').trigger('remove', [ true ]);
    }
});
