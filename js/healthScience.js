//******** Health ********//
$("document").ready(function () {
  console.log("document loaded");
  // call the ajax with the api url, and display results if successful
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=d65cc87792c74fa29a0fdc6222cba63a",
    method: "GET"
  })
    .done(function (data) {
      // console.log(data);
      data = displayHealthResults(data);
      $('#healthArticles').html(data);
    })
    .fail(function () {
      alert('Something went wrong when calling the API');//
    });
});

function displayHealthResults(data) {
  let output = '';

  for (let i = 0; i < data.articles.length; i++) {
    output += '<a href="https://newsapi.org" class="color-secondary">Powered by News API</a>';
    output += '<div class="card mb-4 shadow-lg">';
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
    output += '<a href="#business" rel="" id="anchor3" class="anchorLink text-center">Back to top</a>';
    output += '</div>';
  }
  return output;
}


//Science
$(document).ready(function () {
  // call the ajax with the api url, and display results if successful
  $.ajax({
    url: "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=d65cc87792c74fa29a0fdc6222cba63a",
    method: "GET"
  })
    .done(function (data) {
      // console.log(data);
      data = displayScienceResults(data);
      $('#scienceNews').html(data);
    })
    .fail(function () {
      alert('Something went wrong when calling the API');
    });
});

function displayScienceResults(data) {
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
    output += '<a href="#technology" rel="" id="anchor2" class="anchorLink text-center">Back to top</a>';
    output += '</div>';
  }
  return output;
  // console.log(data.articles);
}
//https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 800);
});