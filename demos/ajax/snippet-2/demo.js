var response;
$.get('foo.php', function(r) { response = r; });
console.log(response); // undefined!
