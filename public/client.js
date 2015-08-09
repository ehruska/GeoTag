


$(function(){


$("#scanbtn").on("click", function(){
  $.get("/scan", function(data){
      console.log(data);
  })
})





function initialize() {

  

  function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
  }

  function showPosition(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      // Map options here
      var mapOptions = {
        center: { lat:position.coords.latitude, lng:position.coords.longitude},
        zoom: 19,
        disableDefaultUI:true
      };


      $.post('/locate', {latitude:latitude, longitude:longitude}, function (data) {
        console.log(data);
      });


      // Create a new map that gets injected into #map in our HTML
    var map = new google.maps.Map(document.getElementById('map'),
        mapOptions); 
  }

  getLocation();

  window.setInterval(getLocation, 10000);

  

}

// Load it into DOM
google.maps.event.addDomListener(window, 'load', initialize);




});
