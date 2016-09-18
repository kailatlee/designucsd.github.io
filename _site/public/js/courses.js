// Dank Sidebar
$(document).ready(function() {
  var sidebarTop = 80;
  var listTop = $(".course-list").offset().top;
  var tmp;
  var scrollTop;

  // Fixes the sidebar at certain height
  $(window).scroll(function() {
    scrollTop = $(window).scrollTop();

    if (scrollTop > listTop - sidebarTop) {
      tmp = $(".courses-majors").offset().left;
      $(".courses-majors").css({
        "position": "fixed",
        "top": sidebarTop,
        "left": tmp
      });
    }
    else {
      unHighlightSidebar();
      $(".courses-majors").css({
        "position": "absolute",
        "top": 0,
        "left": 15
      });
    }

    // Highlights section based on scrolling
    if (scrollTop < $("#compsci").offset().top - sidebarTop) {
      unHighlightSidebar();
      sidebarHighlight("#link-cogsci");
    }
    else if (scrollTop >= $("#compsci").offset().top - sidebarTop &&
        scrollTop < $("#dsgn").offset().top - sidebarTop) {
      unHighlightSidebar();
      sidebarHighlight("#link-compsci");
    }
    else if (scrollTop >= $("#dsgn").offset().top - sidebarTop &&
        scrollTop < $("#other").offset().top - sidebarTop) {
      unHighlightSidebar();
      sidebarHighlight("#link-dsgn");
    }
    else if (scrollTop >= $("#other").offset().top - sidebarTop) {
      unHighlightSidebar();
      sidebarHighlight("#link-other");
    }
  });

});

// Highlight and unhighlight functions
function unHighlightSidebar() {
  $(".courses-majors a").css({
    "font-weight": "400",
    "text-decoration": "none"
  });
}
function sidebarHighlight(sel) {
  $(sel).css({
    "font-weight": "bold",
    "text-decoration": "underline"
  });
}
