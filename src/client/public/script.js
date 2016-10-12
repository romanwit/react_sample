window.onload = loadMap;
function loadMap() {
	var latLong = new google.maps.LatLng(40, -75);
	
	var mapOptions = {
		zoom:9,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: {lat: 40, lng:-75}
	};

	var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);


	var infoWindow = new google.maps.InfoWindow({map: map});

  	// Try HTML5 geolocation.
  	if (navigator.geolocation) {
    		navigator.geolocation.getCurrentPosition(function(position) {
      			var pos = {
        			lat: position.coords.latitude,
        			lng: position.coords.longitude
      			};
      			infoWindow.setPosition(pos);
      			infoWindow.setContent('Location found.');
      			map.setCenter(pos);
				
    		}, function() {
      			handleLocationError(true, infoWindow, map.getCenter());
    		});
  	} else {
    		// Browser doesn't support Geolocation
    		handleLocationError(false, infoWindow, map.getCenter());
  	}

}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}