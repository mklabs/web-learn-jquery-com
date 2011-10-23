// A simple, stateful plugin using the jQuery UI widget factory

$.widget("nmk.progressbar", {
    _create: function() {
        var progress = this.options.value + "%";
        this.element
            .addClass("progressbar")
           .text(progress);
    }
});
