
// Setting default options for a widget

$.widget("nmk.progressbar", {
    // default options
    options: {
        value: 0
    },

    _create: function() {
        var progress = this.options.value + "%";
        this.element
            .addClass( "progressbar" )
            .text( progress );
    }
});
