$(document).ready(function(){
  var longitude;
  var latitude;
  navigator.geolocation.getCurrentPosition(function(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

  var api = 'https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=93ee6f422603315ed1e99a54a9e87cd3';
  $.getJSON(api, function(data){
    var Kelvin = data.main.temp;
    var Celsius = Math.round(Kelvin - 273.15) + "&#176";
    var Farenheit = Math.round((Kelvin*9/5) - 459.67) + "&#176";
    $("#temp").html(Celsius + "C");
    var switchTemp = true;
    $("#temp").click(function(){
    if (switchTemp) {
      $("#temp").html(Farenheit + "F");
      switchTemp = false;
    } else {
        $("#temp").html(Celsius + "C");
        switchTemp = true;
    }
    }); 
    //alert(data.weather[0].id);
    $("#city").html(data.name +","+ data.sys.country);
    $("#descript").html(data.weather[0].description.toUpperCase());
    $("#icon").html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
    var weatherId = data.weather[0].id;
    if (weatherId>=200 && weatherId<=232) {
    $("body").css("background", "url(https://images.unsplash.com/photo-1427507791254-e8d2fe7db7c0?ixlib=rb-0.3.5&s=969f4989e92f0634408d806d52599687&auto=format&fit=crop&w=1500&q=80)");
  } else if (weatherId>=300 && weatherId<=531) {
    $("body").css("background", "url(https://images.unsplash.com/photo-1438449805896-28a666819a20?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=950c1c30e781da5fa29e7db2f185c360&auto=format&fit=crop&w=750&q=80)");
  } else if (weatherId>=600 && weatherId<=622) {
    $("body").css("background", "url(https://images.unsplash.com/photo-1508292895510-c285ffca354a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2c857fd971440c6bd153633c72798703&auto=format&fit=crop&w=751&q=80)");
  } else if (weatherId===800) {
    $("body").css("background", "url(https://images.unsplash.com/photo-1500410379664-df9c8f52dd1d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=760be6ef00b6107e53c08cf0d9bab265&auto=format&fit=crop&w=1459&q=80)");
  } else if (weatherId>=801 && weatherId<=804) {
    $("body").css("background", "url(https://images.unsplash.com/photo-1496765352955-ed98220c6f7f?ixlib=rb-0.3.5&s=b8b1d496b25279017b54364e9bd87e35&auto=format&fit=crop&w=1524&q=80)");
  } else {
    $("body").css("background", "url(https://images.unsplash.com/photo-1445905595283-21f8ae8a33d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4a7a3c541e25c15f0049d2222aa1d538&auto=format&fit=crop&w=752&q=80)");
  };
   
    });
});
  });