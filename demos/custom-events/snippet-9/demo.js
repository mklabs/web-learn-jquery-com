
$('.lightbulb').bind('changeState', function(e) {
    var $light = $(this);
    if ($light.hasClass('on')) {
        $light.removeClass('on').addClass('off');
    } else {
        $light.removeClass('off').addClass('on');
    }
});

$('.switch, .clapper').click(function() {
    $(this).parent().find('.lightbulb').trigger('changeState');
});
