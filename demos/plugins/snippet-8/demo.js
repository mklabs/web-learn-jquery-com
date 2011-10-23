
// Creating widget methods

$.widget("nmk.progressbar", {
    options: {
        value: 0
    },

    _create: function() {
        var progress = this.options.value + "%";
        this.element
            .addClass("progressbar")
            .text(progress);
    },

    // create a public method
    value: function(value) {
        // no value passed, act as a getter
        if (value === undefined) {
            return this.options.value;
        // value passed, act as a setter
        } else {
            this.options.value = this._constrain(value);
            var progress = this.options.value + "%";
            this.element.text(progress);
        }
    },

    // create a private method
    _constrain: function(value) {
        if (value > 100) {
            value = 100;
        }
        if (value < 0) {
            value = 0;
        }
        return value;
    }
});
