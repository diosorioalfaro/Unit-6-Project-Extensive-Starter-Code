$(".Part-Two-Yes ").hide();
$(".Part-Two-No").hide();
$(".Story-Ending-Yes ").hide();
$(".Story-Ending-No").hide();

$(".yes-button").click(function() {
    $(".Part-Two-Yes").show();
    $(".Part-Two-No").hide();
    $(".Story-Ending-Yes ").hide();
    $(".Story-Ending-No").hide();
});

$(".no-button").click(function() {
    $(".Part-Two-No").show();
    $(".Part-Two-Yes").hide();
    $(".Story-Ending-Yes ").hide();
    $(".Story-Ending-No").hide();

});
$(".treasure-img").hover(function() {
    $(".Part-Two-No").hide();
    $(".Part-Two-Yes").hide();
    $(".Story-Ending-Yes").show();
    $(".Story-Ending-No").hide();
});

$(".treasure-img1").hover(function() {
    $(".Part-Two-No").hide();
    $(".Part-Two-Yes").hide();
    $(".Story-Ending-Yes").hide();
    $(".Story-Ending-No").show();
});