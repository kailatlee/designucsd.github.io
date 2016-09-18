$(document).ready(function() {
  console.log("wow");
  var ctr = 0;
  console.log($(".course-list").scrollTop());
  var listTop = $(".course-list").offset().top;
  $(window).scroll(function() {
    console.log("wow");
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > listTop) {
      console.log(ctr++);
    }
  });
});