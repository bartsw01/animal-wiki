$(document).ready(function(){
  // $(".col-xs-4").click(function(){
  //   $(this).find(".panel-body").toggle();
  //
  // });
  $("#turtle").click(function() {
    $("#turtleBody").show();
    $("#snakeBody").hide();
    $("#insectBody").hide();
  });
  $("#snake").click(function() {
    $("#turtleBody").hide();
    $("#snakeBody").show();
    $("#insectBody").hide();
  });
  $("#insect").click(function() {
    $("#turtleBody").hide();
    $("#snakeBody").hide();
    $("#insectBody").show();
  });
});

// $(".col-xs-4").first().click(function(){
//   $(this).find(".panel-body").toggle();

// $("panel.body").hide();
