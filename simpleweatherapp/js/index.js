$(document).ready(function() {
  var globalTemp = 0;
  if (!navigator.geolocation) {
    $("#location").html("<p>Geolocation is not supported by your browser</p>");
    return;
  } else {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      function showPosition(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        $.get(
          "https://fcc-weather-api.glitch.me/api/current?lat=" +
            lat +
            "&lon=" +
            long,
          function(data) {
            //console.log(data);
            $("#location").html(data.name);
            $("#icon").html('<img src="' + data.weather[0].icon + '">');
            globalTemp = $("#temp").html(Math.round(data.main.temp));
            $("#weather").html(
              data.weather[0].description.replace(/\b[a-z]/g, function(f) {
                return f.toUpperCase();
              })
            );
            var units = $("#unit").html("C");
          }
        );
      }
    }   
  }
  $('#unit').on('click', function() {
    var original = $('#temp').text();
    var converted = 0;
    if ($('#unit').text() === 'C') {
      converted = Math.round(original * 9 / 5 + 32);
      $('#unit').html('F');
    } else {
      converted = Math.round((original - 32) * 5 / 9);
      $('#unit').html('C');
    }
    $('#temp').html(converted);
  });
  
});