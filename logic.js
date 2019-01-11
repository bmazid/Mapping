// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);



d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson", function(data) {
	L.geoJson(data, {
		layer:function(feature, latlng){
		return L.circleMarker(latlng)
	},
	style: colors = [
		"light-green",
     	"green",
     	"yellow",
     	"orange",
     	"red",
     	"black"];
}),
	var legend = L.control({position:"bottomright"})
	legend.onAdd = function(){
		var div = L.DomUtil.create("div", "info legend");
		var grades = [0, 1, 2, 3, 4, 5];
		var colors = [     
				"light-green",
     			"green",
     			"yellow",
     			"orange",
     			"red",
     			"black"];
	};
	legend.addTo(myMap)
});
