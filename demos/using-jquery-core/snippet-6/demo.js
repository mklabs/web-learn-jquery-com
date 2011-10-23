
// Iterates over arrays and objects.

$.each([ 'foo', 'bar', 'baz' ], function(idx, val) {
    console.log('element ' + idx + 'is ' + val);
});

$.each({ foo : 'bar', baz : 'bim' }, function(k, v) {
    console.log(k + ' : ' + v);
});
