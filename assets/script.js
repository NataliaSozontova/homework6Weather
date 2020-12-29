var date = $("#currentDay");
var search = document.getElementById("search");


var city;
var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
var today =  moment().format("("+'L'+")");

cityHistory(searchHistory);
getForcast(searchHistory[searchHistory.length-1]);
getCurrentWeather(searchHistory[searchHistory.length-1]);

$("#submit").on("click", function (event) {
event.preventDefault();
city = search.value.trim();
console.log(city);
// date.text(city + " " + today);
getForcast(city);
checkHistory(city);
getCurrentWeather(city);

});

$("body").on("click",".list-group-item", function (event) {
    event.preventDefault();
    city = $(this).text();
    console.log(city);
    getCurrentWeather(city);
    getForcast(city);
    checkHistory(city); 
    });

    function getCurrentWeather(city){
        var key= "ee832b09a8728a9c7e626c00b6d86173";
        // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + key;
        
         $.ajax({
            url: queryURL,
            method: "GET"
          })
            // After data comes back from the request
            .then(function(response) {
              console.log(queryURL);
              console.log(response);
        
           var temperature = JSON.stringify(response.main.temp);
           $("#temp").text("Temperature: " + temperature + " F");
           var humidity = JSON.stringify(response.main.humidity);
           $("#humid").text("Humidity: " + humidity + "%");
           var wind = JSON.stringify(response.wind.speed);
           $("#wind").text("Wind Speed: " + wind + " MPH");

           var icon = response.weather[0].icon;
           console.log(icon);

           var iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
           console.log(iconURL);

           date.text(city + " " + today)
           $("#icon").attr("src", iconURL);

        }); 

     }

function getForcast(city){
var key= "ee832b09a8728a9c7e626c00b6d86173";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + key;
// date.text(city + " " + today);

 $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After data comes back from the request
    .then(function(response) {
      console.log(queryURL);
      console.log(response);

      //for loop with i+8
    //   for(var i=0; i<40; i+8){
    //     var temperature = JSON.stringify(response.list[i].main.temp);
    //     $("#temp"+i).text("Temp: " + temperature + " F");
    //     var humidity = JSON.stringify(response.list[i].main.humidity);
    //     $("#humid"+i).text("Humidity: " + humidity + "%");
    //   }
   var temperature = JSON.stringify(response.list[0].main.temp);
   $("#temp1").text("Temp: " + temperature + " F");
   var humidity = JSON.stringify(response.list[0].main.humidity);
   $("#humid1").text("Humidity: " + humidity + "%");
   var icon = response.list[0].weather[0].icon;
   var iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
   $("#icon1").attr("src", iconURL);

   var temperature = JSON.stringify(response.list[8].main.temp);
   $("#temp2").text("Temp: " + temperature + " F");
   var humidity = JSON.stringify(response.list[8].main.humidity);
   $("#humid2").text("Humidity: " + humidity + "%");
   var icon = response.list[8].weather[0].icon;
   var iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
   $("#icon2").attr("src", iconURL);

   var temperature = JSON.stringify(response.list[16].main.temp);
   $("#temp3").text("Temp: " + temperature + " F");
   var humidity = JSON.stringify(response.list[16].main.humidity);
   $("#humid3").text("Humidity: " + humidity + "%");
   var icon = response.list[16].weather[0].icon;
   var iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
   $("#icon3").attr("src", iconURL);

   var temperature = JSON.stringify(response.list[24].main.temp);
   $("#temp4").text("Temp: " + temperature + " F");
   var humidity = JSON.stringify(response.list[24].main.humidity);
   $("#humid4").text("Humidity: " + humidity + "%");
   var icon = response.list[16].weather[0].icon;
   var iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
   $("#icon4").attr("src", iconURL);

   var temperature = JSON.stringify(response.list[32].main.temp);
   $("#temp5").text("Temp: " + temperature + " F");
   var humidity = JSON.stringify(response.list[32].main.humidity);
   $("#humid5").text("Humidity: " + humidity + "%");
   var icon = response.list[16].weather[0].icon;
   var iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
   $("#icon5").attr("src", iconURL);

   for (var i=1; i<6; i++){
   var day = moment().add(i, 'days').format('L'); 
   $("#day" + i).text(day);
   console.log(day);
   } 
    
});

}

// storage
function cityHistory(searchHistory){
    $("#history").empty();
    console.log(searchHistory);
    for(var i=0; i<searchHistory.length; i++){
        var item = $("<li>");
        item.addClass("list-group-item");
        item.text(searchHistory[i]);
        $("#history").append(item);
    }

}

function checkHistory(city){
    if(city){
    for(var i=0; i<searchHistory.length; i++){
        if(searchHistory[i].toLowerCase() === city.toLowerCase()){
            searchHistory.splice(i, 1);
        }
     }
    
    searchHistory.push(city);
    localStorage.setItem("searchHistory",JSON.stringify(searchHistory));
    cityHistory(searchHistory);
    }
}





// weather.main: "Clouds"
// main: "Snow"
// main: "Clear"
// main: "Rain"



