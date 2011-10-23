
$('.switch, .clapper').click(function() {
    var $light = $(this).parent().find('.lightbulb');
    if ($light.hasClass('on')) {
       $light.removeClass('on').addClass('off');
    } else {
       $light.removeClass('off').addClass('on');
    }
});
