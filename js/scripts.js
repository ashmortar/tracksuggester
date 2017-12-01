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

    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();
    var question6 = $("input:radio[name=question6]:checked").val();
    var name = $("#name").val();

  //this will check to see if any questions were left blank and prompt the user to restart the quiz.
  if ((question1 === "") || (question2 === "") || (question3 === "") || (question4 === "") || (question5 === "") || (question6 === "") || (name === "")) {
    alert("please complete all the questions")
    $("#question7").hide();
    $("#question1").fadeIn();
  }
  })

});
