//news.js

// check to see if the dom is ready
// $(document).ready(function () {
//   alert('Yay! jQuery is working');
// });

function displaylocalFeaturedArticle() {
  clear('localFeaturedArticles');
  var featuredArticle = document.getElementById('localFeaturedArticles');

  var featuredArticles = [
    ['By Roman Eugeniusz, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=60248666', 'And the Bill goes to...', 'Washington drivers could end up paying for a new bridge on I5. Oregon law makers have proposed a plan to pay for a new bridge by inststing tolls.', 'img/i5Bridge.jpg'], ['new homes', 'National Homeownership Month', 'Rates are still low. If you have been thinking about purching a new home, Vancouver has many options to choose from!', 'img/school.jpg'], ['jazz player', 'The Wine & Jazz Festivle', 'Come and experience what our local winweies have to offer while listening to the areas best Jazz.', 'img/i5Bridge.jpg']
  ];

  var output = '';
  var story = Math.floor(Math.random() * featuredArticles.length);
  output += `<img src="${featuredArticles[story][3]}" alt="${featuredArticles[story][0]} "class="img-fluid">
    <h3>${featuredArticles[story][1]}</h3>
    </p><br><p>${featuredArticles[story][2]}</p><br>`;
  featuredArticle.innerHTML = output;
}

function localHeadlineNews() {
  // var headline = document.querySelectorAll('.headlineNews');
  var headline = document.getElementById('headlineNews');
  var headlines = [['Kidnapped woman escapes from a speeding car', 'June 05, 2019'], ['Lakeside Brewer\'s grand opening this Friday', 'June 04, 2019'], ['Wildfire season. Are you ready?', 'June 07,2019'], ['Data Breach at a local hospital, learn more', 'June 10, 2019'], ['Protesters plant a garden on railroad tracks', 'June 06, 2019']];
  var output = '';
  for (let i = 0; i < headlines.length; i++) {
    output += `<p class="lead">${headlines[i][0]}</p><p class="mt--2">${headlines[i][1]}</p><br>`;
  }

  headline.innerHTML = output;
}


function clear(theNewsId) {
  console.log('clear!');
  var theNews = document.getElementById(theNewsId);
  theNews.innerHTML = '';
}

window.onload = function () {
  displaylocalFeaturedArticle();
  localHeadlineNews();
  localNewsTimer = setInterval(function () { displaylocalFeaturedArticle(); }, 10000);
} 