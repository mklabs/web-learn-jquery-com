
$(document).bind('myCustomEvent', { foo : 'bar' }, function(e, arg1, arg2) {
    console.log(e.data.foo); // 'bar'
    console.log(arg1); // 'bim'
    console.log(arg2); // 'baz'
});

$(document).trigger('myCustomEvent', [ 'bim', 'baz' ]);
