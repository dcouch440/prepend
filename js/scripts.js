$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");

    $("body").addClass("background-red")
    $("body").removeClass("background-blue")
    $("body").removeClass("background-orange")
  });
  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");

    $("body").addClass("background-blue")
    $("body").removeClass("background-red")
    $("body").removeClass("background-orange")
    
  });
  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    
    $("body").addClass("background-orange")
    $("body").removeClass("background-red")
    $("body").removeClass("background-blue")
  });
});