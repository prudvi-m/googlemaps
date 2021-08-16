// This example requires the Geometry library. Include the libraries=geometry
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=geometry">
var marker;
var autocomplete;
var map;
var locationRadius;
var currentCordinates;

function initGoolgeMapAPI() {
  searchBoxInit();
}

function searchBoxInit() {
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("txtAddress"),
    {
      types: ["geocode"],
    }
  );
  google.maps.event.addListener(autocomplete, "place_changed", function () {
    var near_place = autocomplete.getPlace();
    console.log(near_place);
    var lat = near_place.geometry.location.lat();
    var lng = near_place.geometry.location.lng();
    currentCordinates = { lat: lat, lng: lng };
    mapInit();
    markerInit();
    circleInit();
  });
}

function mapInit() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5.5,
    center: currentCordinates,
    mode: "places",
  });

  map.controls[google.maps.ControlPosition.TOP_CENTER].push(
    document.getElementById("info")
  );
}

function markerInit() {
  marker = new google.maps.Marker({
    map,
    draggable: true,
    position: currentCordinates,
  });
  google.maps.event.addListener(marker, "position_changed", update);
  update();
}

function update() {
  var originValue = String(marker.getPosition());
  document.getElementById("origin").value = originValue;
  var geoArr = originValue.replace("(", "").replace(")", "").split(",");
  debugger;
  currentCordinates.lat = parseFloat(geoArr[0]);
  currentCordinates.lng = parseFloat(geoArr[1]);
  circleInit();
}

function circleInit() {
  locationRadius?.setMap(null);
  if ($("#txtRadius").val() != "" && $("#txtAddress").val() != "")
    locationRadius = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map,
      center: currentCordinates,
      radius: parseFloat($("#txtRadius").val()),
    });
}
