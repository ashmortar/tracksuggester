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

    var question1 = parseInt($("input:radio[name=question1]:checked").val());
    var question2 = parseInt($("input:radio[name=question2]:checked").val());
    var question3 = parseInt($("input:radio[name=question3]:checked").val());
    var question4 = parseInt($("input:radio[name=question4]:checked").val());
    var question5 = parseInt($("input:radio[name=question5]:checked").val());
    var question6 = parseInt($("input:radio[name=question6]:checked").val());
    var name = $("#name").val();

    //this grabs the value from name and inputs it into the related span in the track suggestion
    $(".name").text(name);

    //this checks the value of question 4 and inputs a corresponding string into the motivation span
    if (question4 === 1) {
      $(".motivation").text("Loving problem solving will suit you well in your career as a programmer.");
    } else if (question4 === 2) {
      $(".motivation").text("While working remotely can be a part of being a developer, don't try to change careers just for this reason. Make sure you dip your feet into the programming waters before diving in.");
    } else if (question4 === 3) {
      $(".motivation").text("Creation is the ultimate goal of all programming.  Brining a new project into the world can be very rewarding");
    }

    //this checks the value of question 6 and inputs a corresponding string into the experience span
    if (question6 === 1) {
      $(".experience").text("Sounds like you are brand new to the field, " + name + ". Don't worry, each track starts with an intro to programming class that will help get you up to speed!");
    } else if (question6 === 2) {
      $(".experience").text("Since you have a little experience Epicodus will be a great place for you to hone your skills and take them to the next level.");
    } else if (question6 === 3) {
      $(".experience").text("Each track starts with intro to programming, and since you already have a lot of programming experience you may want to get in touch with us to see if you should test out of the Intro class.");
    } else if (question6 === 4) {
      $(".experience").text("Cool! you are already a pro! I hope you like my code.  It might be a little messy but I'm new and trying really hard!");
    };

    //this will check to see if any questions were left blank and prompt the user to restart the quiz.
    if ((question1 === "") || (question2 === "") || (question3 === "") || (question4 === "") || (question5 === "") || (question6 === "") || (name === "")) {
      alert("please complete all the questions")
      $("#question7").hide();
      $("#question1").fadeIn();
    };

    if (question1 === 1) {
      $("#question7").hide();
      $("#cssdesign").fadeIn();
    }
  });

});
