(function($) {
  // code using $ as alias to jQuery
  $(function() {
    // Hide the hypotext content.
    $('.hypotext-content').hide();
    // When a hypotext link is clicked.
    $('a.hypotext.closed').click(function (e) {
      // custom handling here
      e.preventDefault();
      console.log($(this).attr('rel'));

      // Create the class reference from the rel value.
      var id = '.' + $(this).attr('rel');
      console.log($(id));

      // If the content is hidden, show it now.
      if ( $(id).css('display') == 'none' ) {
        $(id).show('slow');
        if (jQuery.ui) {
          // UI loaded
          $(id).effect("highlight", {}, 1000);
        }

      }
      // If the content is shown, hide it now.
      else {
        $(id).hide('slow');
      }
    });
  });
})(jQuery);