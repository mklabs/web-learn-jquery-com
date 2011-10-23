
// Responding when an option is set

$.widget("nmk.progressbar", {
    options: {
        value: 0
    },

    _create: function() {
        this.element.addClass("progressbar");
        this._update();
    },

    _setOption: function(key, value) {
        this.options[key] = value;
        this._update();
    },

    _update: function() {
        var progress = this.options.value + "%";
        this.element.text(progress);
    }
});
