$(document).ready(function() {
//click function that hides current either start survey button or current questoin and displays next div object
  $("button.next").click(function(event) {
    event.preventDefault();
    $(this).parent().hide();
    $(this).parent().next().fadeIn();
  })

//click function for submit button at end of Survey
  $("form").submit(function(event) {
    event.preventDefault();

    var queston1 = $("#question1").val();
    var queston2 = $("#question2").val();
    var queston3 = $("#question3").val();
    var queston4 = $("#question4").val();
    var queston5 = $("#question5").val();
    var queston6 = $("#question6").val();
    var queston7 = $("#question7").val();

  //this will check to see if any questions were left blank and prompt the user to restart the quiz.
  if ()
  })

});
