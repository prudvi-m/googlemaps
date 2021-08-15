// This example requires the Geometry library. Include the libraries=geometry
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=geometry">
let marker;
let autocomplete;
let map;

function initGoolgeMapAPI() {
  searchBoxInit();
  //mapInit();
  //markerInit();
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
    debugger;
    var lat = near_place.geometry.location.lat();
    var lng = near_place.geometry.location.lng();
    mapInit(lat, lng);
    markerInit(lat, lng);
  });
}

function mapInit(lat, lng) {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4.5,
    center: { lat: lat, lng: lng },
    mode: "places",
  });

  map.controls[google.maps.ControlPosition.TOP_CENTER].push(
    document.getElementById("info")
  );
}

function markerInit(lat, lng) {
  marker = new google.maps.Marker({
    map,
    draggable: true,
    position: { lat: lat, lng: lng },
  });
  google.maps.event.addListener(marker, "position_changed", update);
  update();
}

function update() {
  document.getElementById("origin").value = String(marker.getPosition());
}
