// Greet the visitors using JavaScript
var date = new Date();
var hours = date.getHours();

var greeting;

if (hours < 12) greeting = "Good Morning";
else if (hours >= 12 && hours <= 17) greeting = "Good Afternoon";
else if (hours >= 17 && hours <= 24) greeting = "Good Evening";

$(".greeting").append(`${greeting} !!!`);

// Display landing page first and then the homepage/profile using Jquery
$(document).ready(function () {

  $("#background-img").show();
  $("#homePage-info").hide();

  $(".profile-connect").on("click", function () {
    $("#background-img").hide();
    $("#homePage-info").show();
  });
});


// Display current news on the footer
var artDisplay = (article) => {
  var headline = "";
  if (article.item_type === "Article") {
    if (article.title !== "") {
      headline = article.title + " ~ ~ ~ ";
    } else {
      headline = "";
    }
  } else {
    headline = "";
  }
  $(".art-display").append(headline);
};

var queryURL =
  "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=i4NofGAnSCvvDI1Thfl2GMGNhh5A22Dj";

$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
  var docs = response.results;
  for (var i = 0; i < docs.length; i++) {
    artDisplay(docs[i]);
  }
});
