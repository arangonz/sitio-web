
function cargaMapa() {
    'use strict';
    var varLocation = new google.maps.LatLng(40.507169, -1.588055);
    var varMapoptions = {
        center: varLocation,
        zoom: 15
    };
    var varMap;
    var varMarker = new google.maps.Marker({
        position: varLocation,
        map: varMap,
    });
    varMap = new google.maps.Map(document.getElementById('googleMap'),
        varMapoptions);
    varMarker.setMap(varMap);
}
google.maps.event.addDomListener(window, 'load', cargaMapa);
