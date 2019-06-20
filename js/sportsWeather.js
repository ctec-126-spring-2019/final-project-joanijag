//********5 Dat Forcast********//

// https://openweathermap.org/forecast5
//w3schools

$('#btnForecast').on('click', function () {
  var userInput = $('#userInput').val();
  if (isNaN(userInput)) {
    var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&APPID=cc3c8116a1cf9ca3a95a01711a5ec899&units=imperial";
    // console.log(url);
    $.ajax({
      url: url,
      method: 'GET'
    }).done(function (data) {
      //console.log(data);
      data = displayWeatherResults(data);
      $('#result').html(data);
    });
  } else {
  }
});

function displayWeatherResults(data) {
  let output = '';
  //I used the 5 day / 3 hour forecast. It returns 40 arrays, 5 day forcast every 3 hours. to get the "high" and "Low" for the day I needed to isolate two sepparat blocks of time. For the "Low" temprature I used the search() method to find the array that is for 3:00AM.
  for (let i = 0; i < data.list.length; i++) {
    //Min Temp at 3am
    let curTime = data.list[i].dt_txt; // date time string for each object
    //Searching for a String in a String //resource:https://www.w3schools.com/js/js_string_methods.asp
    let minTemp = curTime.search("03:00:00"); //finds the objects with that time 
    if (minTemp >= 0) {
      var dtMin = data.list[i].main;
      var min = Math.round(dtMin.temp_min);//the temp_min elements are in decimal I used Math.round() to get a whole number. 
    }

    //6pm Object
    //I used the 6:00PM for the "high" temprature. I also used the array at 6:00PM to set all of the weather information displayed. 
    let curHour = curTime.search("18:00:00"); //finds the objects with that time
    if (curHour >= 0) { //sets the loop to display only the objects with the time of "18:00:00"
      // output += "<div class>";
      output += '<div class="card mt-3 m-2 weatherOutput bg-warning shadow p-3 mb-5 rounded">'
      output += '<div class="card-block  p-2">';

      //Date 
      //resource used: https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date //answer #1505
      // the array element returns this string. dt_txt: "2017-02-16 12:00:00"
      //I really struggled with this and got some help from my husband on this one.
      let dt = data.list[i].dt_txt;
      let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      let today = new Date(dt);
      let date = today.toLocaleDateString("en-US", options);
      output += '<div class="card-block">';
      output += '<p class="card-text">' + date + '</p>';
      output += '</div>';

      //Icon, description
      // resource used: https://stackoverflow.com/questions/26912829/return-image-as-html
      let sky = data.list[i].weather[0]; //weather array
      let imagePath = `http://openweathermap.org/img/w/${sky.icon}.png`; //url for the api images. ${sky.icon} passes in the icon for each weather object.
      output += `<img src="${imagePath}" height="100" alt="weather icon">`;
      `<p class="card-text">${sky.description}</p>`;

      //Temp 
      let main = data.list[i].main;
      output += `<p>Low: ${min}</p>`; //class="card-text
      output += `<p>High: ${Math.round(main.temp_max)}</p>`;//the temp_max elements are in decimal I used Math.round() to get a whole number. 
      // humidityAndWind();
      //Wind and humidity
      let wind = data.list[i].wind;
      let windSpeed = Math.round(wind.speed);//the speed elements are in decimal I used Math.round() to get a whole number.
      let windDeg = Math.round(wind.deg);//the wind.deg elements are set as meteorological wind direction that include decimals. I used Math.round() to get a whole number.
      // console.log(windDeg);
      let direction = "";

      //The "wind" elements in the array are meteorological degrees. I used if/else logic to determin the direction of the wind.
      if (windDeg < 22) {
        direction = "N";
      } else if (windDeg > 22 && windDeg < 67) {
        direction = "NE";
      } else if (windDeg > 67 && windDeg < 112) {
        direction = "E";
      } else if (windDeg > 112 && windDeg < 157) {
        direction = "SE";
      } else if (windDeg > 157 && windDeg < 202) {
        direction = "S";
      } else if (windDeg > 202 && windDeg < 247) {
        direction = "SW";
      } else if (windDeg > 247 && windDeg < 292) {
        direction = "W";
      } else if (windDeg > 292 && windDeg < 337) {
        direction = "NW";
      } else if (windDeg > 337) {
        direction = "N";
      }
      output += `<p>Wind: ${direction} ${windSpeed}</p>`;
      // output += `<p>Wind: ${wind.deg}</p>`;
      output += `<p>Humidity: ${main.humidity}</p>`;
      output += '</div>';
      output += '</div>';
    }
  }
  return output;
}


//********Sports********//

$(document).ready(function () {
  // call the ajax with the api url, and display results if successful
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=d65cc87792c74fa29a0fdc6222cba63a",
    method: "GET"
  })
    .done(function (data) {
      // console.log(data);
      data = displaySportsResults(data);
      $('#sportsNews').html(data);
    })
    .fail(function () {
      alert('Something went wrong when calling the API');
    });
});

function displaySportsResults(data) {
  let output = '';

  for (let i = 0; i < data.articles.length; i++) {
    output += '<a href="https://newsapi.org">Powered by News API</a>';
    output += '<div class="card mb-4 shadow">';
    let newsTitle = data.articles[i].title;
    console.log(newsTitle);
    let newsImage = data.articles[i].urlToImage;
    let newsDescription = data.articles[i].description;
    let newsURL = data.articles[i].url;
    let newsContent = data.articles[i].content;
    let newsAuthor = data.articles[i].author;
    output += '<div class="card-block p-2">';
    output += `<p class="lead">${newsTitle}</p>`;
    output += '</div>';
    output += `<img src="${newsImage}" class="img-thumbnail" height="auto" alt="news Image">`;
    output += '<div class="card-block p-2">';
    output += `<p class="card-text">${newsDescription}</p>`;
    output += `<p class="card-text">by: ${newsAuthor}</p>`;
    output += `<a href="${newsURL}" target="_blank">Read More</a>`;
    output += '</div>';
    output += '<a href="#sports" rel="" id="anchor4" class="anchorLink text-center">Back to top</a>';
    output += '</div>';
  }
  return output;
}
$('#btnForecast').click();

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 800);
});