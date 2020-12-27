var date = $("#currentDay");
var search = document.getElementById("search");


var city;

var today =  moment().format("("+'L'+")");

// var day = moment().add(1, 'days').format("("+'L'+")");  
// console.log(day); 

$("#submit").on("click", function (event) {
 event.preventDefault();
city = search.value.trim();
console.log(city);
date.text(city + " " + today);

var key= "ee832b09a8728a9c7e626c00b6d86173";

var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + key;
 
 $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After data comes back from the request
    .then(function(response) {
      console.log(queryURL);
      console.log(response);
   var temperature = JSON.stringify(response.list[3].main.temp);
   $("#temp1").text("Temp: " + temperature + " F");
   var humidity = JSON.stringify(response.list[3].main.humidity);
   $("#humid1").text("Humidity: " + humidity + "%");

   var temperature = JSON.stringify(response.list[11].main.temp);
   $("#temp2").text("Temp: " + temperature + " F");
   var humidity = JSON.stringify(response.list[11].main.humidity);
   $("#humid2").text("Humidity: " + humidity + "%");

   var temperature = JSON.stringify(response.list[19].main.temp);
   $("#temp3").text("Temp: " + temperature + " F");
   var humidity = JSON.stringify(response.list[19].main.humidity);
   $("#humid3").text("Humidity: " + humidity + "%");

   var temperature = JSON.stringify(response.list[27].main.temp);
   $("#temp4").text("Temp: " + temperature + " F");
   var humidity = JSON.stringify(response.list[27].main.humidity);
   $("#humid4").text("Humidity: " + humidity + "%");

   var temperature = JSON.stringify(response.list[35].main.temp);
   $("#temp5").text("Temp: " + temperature + " F");
   var humidity = JSON.stringify(response.list[35].main.humidity);
   $("#humid5").text("Humidity: " + humidity + "%");

   for (var i=1; i<6; i++){
   var day = moment().add(i, 'days').format('L'); 
   $("#day" + i).text(day);
   console.log(day);
   } 
    
});

});





