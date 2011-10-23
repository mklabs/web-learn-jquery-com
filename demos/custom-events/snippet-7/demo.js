
$('.lightbulb')
    .bind('changeState', function(e) {
        var $light = $(this);
        if ($light.hasClass('on')) {
            $light.trigger('turnOff');
        } else {
            $light.trigger('turnOn');
        }
    })
    .bind('turnOn', function(e) {
        $(this).removeClass('off').addClass('on');
    })
    .bind('turnOff', function(e) {
        $(this).removeClass('on').addClass('off');
    });

$('.switch, .clapper').click(function() {
    $(this).parent().find('.lightbulb').trigger('changeState');
});

$('#master_switch').click(function() {
    if ($('.lightbulb.on').length) {
        $('.lightbulb').trigger('turnOff');
    } else {
        $('.lightbulb').trigger('turnOn');
    }
});
