// This example requires the Geometry library. Include the libraries=geometry
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=geometry">
let marker;

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: 34, lng: -40.605 },
  });
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(
    document.getElementById("info")
  );
  marker = new google.maps.Marker({
    map,
    draggable: true,
    position: { lat: 40.714, lng: -74.006 },
  });
  google.maps.event.addListener(marker, "position_changed", update);
  update();
}

function update() {
  document.getElementById("origin").value = String(marker.getPosition());
}
