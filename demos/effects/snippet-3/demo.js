
$(function() {
// lets do something with google maps:
var $map = $("#map_canvas");
var myLatlng = new google.maps.LatLng(-34.397, 150.644);
var myOptions = {zoom: 8, center: myLatlng, mapTypeId: google.maps.MapTypeId.ROADMAP};
var geocoder = new google.maps.Geocoder();
var map = new google.maps.Map($map[0], myOptions);
var resized = function() {
    // simple animation callback - let maps know we resized
    google.maps.event.trigger(map, 'resize');
};

// wait 2 seconds
$map.delay(2000);
// resize the div:
$map.animate({
    width: 250,
    height: 250,
    marginLeft: 250,
    marginTop:250
}, resized);
// geocode something
$map.queue(function(next) {
    // find stackoverflow's whois address:
  geocoder.geocode({'address': '55 Broadway New York NY 10006'},handleResponse);

  function handleResponse(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
          var location = results[0].geometry.location;
          map.setZoom(13);
          map.setCenter(location);
          new google.maps.Marker({ map: map, position: location });
      }
      // geocoder result returned, continue with animations:
      next();
  }
});
// after we find stack overflow, wait 3 more seconds
$map.delay(3000);
// and resize the map again
$map.animate({
    width: 500,
    height: 500,
    marginLeft:0,
    marginTop: 0
}, resized);
});
