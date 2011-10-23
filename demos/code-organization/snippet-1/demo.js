
// Using the module pattern for a jQuery feature

$(document).ready(function() {
  var feature = (function() {
    var $items = $('#myFeature li'),
        $container = $('<div class="container"></div>'),
        $currentItem,

        urlBase = '/foo.php?item=',

        createContainer = function() {
          var $i = $(this),
              $c = $container.clone().appendTo($i);

          $i.data('container', $c);
        },

        buildUrl = function() {
          return urlBase + $currentItem.attr('id');
        },

        showItem = function() {
          var $currentItem = $(this);
          getContent(showContent);
        },

        showItemByIndex = function(idx) {
          $.proxy(showItem, $items.get(idx));
        },

        getContent = function(callback) {
          $currentItem.data('container').load(buildUrl(), callback);
        },

        showContent = function() {
          $currentItem.data('container').show();
          hideContent();
        },

        hideContent = function() {
          $currentItem.siblings()
            .each(function() {
              $(this).data('container').hide();
          });
        };

    $items
      .each(createContainer)
      .click(showItem);

    return { showItemByIndex : showItemByIndex };
  })();

  feature.showItemByIndex(0);
});
