$(document).ready(function() {
    $(".background-img").show();
    $(".homePage-info").hide();

    $(".profile-connect").on("click", function() {
        $(".background-img").hide();
        $(".homePage-info").show();
    });

    $(".navbar").on("click", function() {
        $(".background-img").hide();
        $(".homePage-info").show();
    });
});