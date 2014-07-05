(function($) {

  $.fn.autocomplete = function(options) {
    var defaults = {
      search_url: 'search.php',
      fire_min_len: 2
    };

    var settings = $.extend({}, defaults, options);

    var showList = function(search_data) {
      var ll = JSON.parse(search_data);
      var html = '<div class="list-group">';
      for (var l in ll) {
        html += "<a class='list-group-item'>" + ll[l] + "</a>";
      }
      html += '</div>';

      $('#results > div').remove();
      $('#results').append(html);
    };

    this.on('keyup', function(e) {
      var search_string = $(this).val();
      if (search_string !== '' && search_string.length >= settings.fire_min_len) {
        $.ajax({
          type: 'POST',
          url: settings.search_url,
          data: {
            query: search_string
          },
          cache: false,
          success: function(html) {
            showList(html);
          }
        });
      } else {
        $('#results > div').remove();
      }
      return false;
    });
  };

})(jQuery);
