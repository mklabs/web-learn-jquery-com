// Creating a plugin to add and remove a class on hover

// defining the plugin
(function($){
    $.fn.hoverClass = function(c) {
        return this.hover(
            function() { $(this).toggleClass(c); }
        );
    };
})(jQuery);

// using the plugin
$('li').hoverClass('hover');
