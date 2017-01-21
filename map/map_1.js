var southWest = L.latLng(7.319, 61.523),
        northEast = L.latLng(36.774, 100.635),
        bounds = L.latLngBounds(southWest, northEast);
  
L.mapbox.accessToken = 'pk.eyJ1Ijoib3BlbnN0cmVldG1hcCIsImEiOiJhNVlHd29ZIn0.ti6wATGDWOmCnCYen-Ip7Q';
   var indiaMap = L.mapbox.tileLayer('openstreetmap.1b68f018');
  
    var map = L.map('map', {
            layers: indiaMap
        }, {
            maxBounds: bounds,
        })
        .addControl(L.mapbox.geocoderControl('mapbox.places', {
            autocomplete: true
        }))
        .setView([22.14980, 79.08060], 4);
    L.marker([23, 80], {
      icon: L.mapbox.marker.icon({
        'marker-color': '#9c89cc'
      })
    })
    .bindPopup('<a href="http://results001.resultstrack.in/map"> INDIA map </a>')
    .addTo(map);

    L.hash(map);
    L.control.layers(baseLayers, overlayMaps, 
    {
        position: 'topleft',
    }
    ).addTo(map);
