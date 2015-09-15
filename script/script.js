var link = document.querySelector(".hotel_search");
var popup = document.querySelector(".modal_content");
var form = popup.querySelector(".login_form");
var arrival = popup.querySelector("[name=arrival_date]");
var depart = popup.querySelector("[name=date_of_depart]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("modal_content_show");
  arrival.focus();

});

form.addEventListener("submit", function() {
  if (!(arrival.value && depart.value)) {
    event.preventDefault();
    popup.classList.add("modal_error")
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    if (popup.classList.contains("modal_content_show")) {
      popup.classList.remove("modal_content_show");
    }
  }
});

function initialize() {
  var mapOptions = {
    zoom: 15,
    scrollwheel: false,
    center: new google.maps.LatLng(34.8710488,-111.7622159)
  }
  var map = new google.maps.Map(document.querySelector('.map_interactive'), mapOptions);
  var myLatLng = new google.maps.LatLng(34.871,-111.762);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}
google.maps.event.addDomListener(window, 'load', initialize);

