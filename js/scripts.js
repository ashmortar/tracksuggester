$(document).ready(function() {
//click function that hides current either start survey button or current questoin and displays next div object
  $("button.next").click(function(event) {
    event.preventDefault();
    $(this).parent().hide();
    $(this).parent().next().fadeIn();
  })


});
