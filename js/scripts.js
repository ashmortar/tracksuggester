$(document).ready(function() {

  $("button.next").click(function(event) {
    event.preventDefault();
    $(this).parent().fadeOut();
    $(this).parent().next().fadeIn();
  })
});
