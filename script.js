// Function to initialize the map
function initMap() {
    // Check if Geolocation is supported by the browser
    if (navigator.geolocation) {
      // Get the current position
      navigator.geolocation.getCurrentPosition(function(position) {
        // Create a LatLng object using the coordinates
        var location = {lat: position.coords.latitude, lng: position.coords.longitude};
        
        // Create a new Google Maps map centered at the current location
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: location
        });
        
        // Create a marker at the current location
        var marker = new google.maps.Marker({
          position: location,
          map: map
        });
      }, function() {
        // Handle errors if any
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }
  
  // Function to handle location errors
  function handleLocationError(browserHasGeolocation, infoWindow, location) {
    alert("Error: The Geolocation service failed.");
  }
  