var map;
var mapMode = "place";
var basicUrl =
  "https://www.google.com/maps/embed/v1/" +
  mapMode +
  "?key=AIzaSyACg7bDUW8yAdMiEb-stiY1tW21_kD6YrM&q=";
//"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyCdGv5cjpA0dMUCSolCf89tl_vgccGvsu0"
function initMap() {
  //map = new google.maps.Map(document.getElementById("map"), {
  //    center: { lat: 17.38, lng: 78.48 },
  //    zoom: 8,
  //});
}
function showMap() {
  if ($("#txtAddress").val() != "") {
    //$("#map").html('');
    console.log($("#txtAddress").val());
    basicUrl += $("#txtAddress").val();
    $("#iMapFrame").attr("src", basicUrl);
  } else alert(" Please give valid location or place  ");
}
function hideMap() {
  $("#map").hide();
}
$(document).ready(function () {
  var autocomplete;
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("txtAddress"),
    {
      types: ["geocode"],
    }
  );
  google.maps.event.addListener(autocomplete, "place_changed", function () {
    console.log(autocomplete);
    var near_place = autocomplete.getPlace();
    debugger;
    console.log(near_place);
  });
});
