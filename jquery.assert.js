(function($) {
  $.assert.options = {
    enabled: true,
    error: function(msg) {
      console && console.log(msg);
    }
  };
  $.fn.assert = function() {
    if ( !$.assert.options.enabled ) {
      return this;
    }
    var msg, min = 1, max;
    if ( arguments.length == 1 ) {
      msg = arguments[0];
    }
    
    if ( this.length >= min ) {
      $.assert.options.error(msg);
    }
    
    return this;
  };
})(jQuery);
