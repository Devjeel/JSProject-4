// Initialize and add the map
function initMap() {
  // The location of Uluru
  var barrie = {lat: 44.413119, lng: -79.647893};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: barrie});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: barrie, map: map});
}