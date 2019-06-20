//localNews.js
$(document).ready(function () {
  $('headline')
});

function localHeadlineNews() {
  var headline = document.getElementById("headlineNews");
  var headlines = [['Kidnapped woman escapes from a speeding car', 'June 05, 2019'], ['Lakeside Brewer\'s grand opening this Friday', 'June 04, 2019'], ['Wildfire season. Are you ready?', 'June 07,2019'], ['Protesters plant a garden on railroad tracks', 'June 06, 2019']];
  let output = '';
  for (let i = 0; i < headlines.length; i++) {
    output += '<div class="bg-white shadow-lg mt-3">';
    output += `<p class="lead text-center">${headlines[i][0]}</p><p class="mt-2 text-center">${headlines[i][1]}</p><br>`;
    output += '</div>';
  }
  headline.innerHTML = output;
}

function clear(theNewsId) {
  console.log('clear!');
  var theNews = document.getElementById(theNewsId);
  theNews.innerHTML = '';
}

//********Business********//

$(document).ready(function () {
  // call the ajax with the api url, and display results if successful
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d65cc87792c74fa29a0fdc6222cba63a",
    method: "GET",
  }).done(function (data) {
    // console.log(data);
    data = displayBusinessSingleResult(data);
    $('#businessSingle').html(data);
  }).fail(function () {
    alert('Something went wrong when calling the API');
  });
});

function displayBusinessSingleResult(data) {
  let output = '';

  output += '<a href="https://newsapi.org">Powered by News API</a>';
  output += '<div class="card mb-4 shadow">';
  let newsTitle = data.articles[0].title;
  console.log(newsTitle);
  let newsImage = data.articles[0].urlToImage;
  let newsDescription = data.articles[0].description;
  let newsURL = data.articles[0].url;
  let newsContent = data.articles[0].content;
  let newsAuthor = data.articles[0].author;
  output += '<div class="card-block p-2">';
  output += `<p class="lead">${newsTitle}</p>`;
  output += '</div>';
  output += `<img src="${newsImage}" class="img-thumbnail" height="auto" alt="news Image">`;
  output += '<div class="card-block p-2">';
  output += `<p class="card-text">${newsDescription}</p>`;
  output += `<p class="card-text">by: ${newsAuthor}</p>`;
  output += `<a href="${newsURL}" target="_blank">Read More</a>`;
  output += '</div>';
  output += '</div>';
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
      data = displaySportsSingleResult(data);
      $('#sportsSingle').html(data);
    })
    .fail(function () {
      alert('Something went wrong when calling the API');
    });
});

function displaySportsSingleResult(data) {
  let output = '';
  output += '<a href="https://newsapi.org">Powered by News API</a>';
  output += '<div class="card mb-4 shadow">';
  let newsTitle = data.articles[0].title;
  console.log(newsTitle);
  let newsImage = data.articles[0].urlToImage;
  let newsDescription = data.articles[0].description;
  let newsURL = data.articles[0].url;
  let newsContent = data.articles[0].content;
  let newsAuthor = data.articles[0].author;
  output += '<div class="card-block p-2">';
  output += `<p class="lead">${newsTitle}</p>`;
  output += '</div>';
  output += `<img src="${newsImage}" class="img-thumbnail" height="auto" alt="news Image">`;
  output += '<div class="card-block p-2">';
  output += `<p class="card-text">${newsDescription}</p>`;
  output += `<p class="card-text">by: ${newsAuthor}</p>`;
  output += `<a href="${newsURL}" target="_blank">Read More</a>`;
  output += '</div>';
  output += '</div>';

  return output;
}

//********Health********//

$(document).ready(function () {
  // call the ajax with the api url, and display results if successful
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=d65cc87792c74fa29a0fdc6222cba63a",
    method: "GET"
  })
    .done(function (data) {
      // console.log(data);
      data = displayHealthSingleResult(data);
      $('#healthSingle').html(data);
    })
    .fail(function () {
      alert('Something went wrong when calling the API');
    });
});

function displayHealthSingleResult(data) {
  let output = '';
  output += '<a href="https://newsapi.org">Powered by News API</a>';
  output += '<div class="card mb-4 shadow">';
  let newsTitle = data.articles[0].title;
  console.log(newsTitle);
  let newsImage = data.articles[0].urlToImage;
  let newsDescription = data.articles[0].description;
  let newsURL = data.articles[0].url;
  let newsContent = data.articles[0].content;
  let newsAuthor = data.articles[0].author;
  output += '<div class="card-block p-2">';
  output += `<p class="lead">${newsTitle}</p>`;
  output += '</div>';
  output += `<img src="${newsImage}" class="img-thumbnail" height="auto" alt="news Image">`;
  output += '<div class="card-block p-2">';
  output += `<p class="card-text">${newsDescription}</p>`;
  output += `<p class="card-text">by: ${newsAuthor}</p>`;
  output += `<a href="${newsURL}" target="_blank">Read More</a>`;
  output += '</div>';
  output += '</div>';

  return output;
}

function displaylocalFeaturedArticle() {
  clear('localFeaturedArticles');
  var featuredArticle = document.getElementById('localFeaturedArticles');

  var featuredArticles = [
    ['By Roman Eugeniusz, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=60248666', 'And the Bill goes to...', 'Washington drivers could end up paying for a new bridge on I5. Oregon law makers have proposed a plan to pay for a new bridge largly by Wa shington commuters.', 'img/i5Bridge.jpg'], ['new homes', 'National Homeownership Month', 'Rates are still low. If you have been thinking about purching a new home, Vancouver has many options to choose from!', 'img/school.jpg'], ['jazz player', 'The Wine & Jazz Festival', 'Come and experience what our local winweies have to offer while listening to the areas best Jazz.', 'img/i5Bridge.jpg']
  ];

  let output = '';
  var story = Math.floor(Math.random() * featuredArticles.length);
  output += '<div class="container">';
  output += `<img src="${featuredArticles[story][3]}" height="auto" alt="${featuredArticles[story][0]} "class="img-fluid border-dark rounded-top">`;
  output += '<div class="text-block rounded-bottom">';
  // output += '<div class="text-block">';
  output += `<h4>${featuredArticles[story][1]}</h4>`;
  output += `<p>${featuredArticles[story][2]}</p>`;
  output += '</div>';
  output += '</div>';
  featuredArticle.innerHTML = output;
}

window.onload = function () {
  displaylocalFeaturedArticle();
  localHeadlineNews();
  displaylocalFeaturedArticle();;
  localNewsTimer = setInterval(function () { displaylocalFeaturedArticle(); }, 10000);
}

