const TEAM_CURRENT = "team-current";
const TEAM_ALUMNI = "team-alumni";
const TEAM_EVERYONE = "team-everyone";

$(document).ready(function() {

  // The cutoff year for alumni
  const GRAD_YEAR = 2016;

  var team_members = $(".team-member");
  const yearList = team_members.map(function() {
    return parseInt($(this).attr("data-year"), 10)
  })

  const MIN_YEAR = Math.min.apply(Math, yearList);
  const MAX_YEAR = Math.max.apply(Math, yearList);

  // Start with everyone active
  $("#teamselect_everyone").addClass("active");

  $("#teamselect_current").click(function() {
    filterTeam(TEAM_CURRENT);
    $("#teamselect .btn").removeClass("active");
    $(this).addClass("active");
  });
  $("#teamselect_alumni").click(function() {
    filterTeam(TEAM_ALUMNI);
    $("#teamselect .btn").removeClass("active");
    $(this).addClass("active");
  });
  $("#teamselect_everyone").click(function() {
    filterTeam(TEAM_EVERYONE);
    $("#teamselect .btn").removeClass("active");
    $(this).addClass("active");
  });

  // Filters team by type
  function filterTeam(type) {
    if (!type) {
      console.log("Team type not specified");
      return false;
    }
    else if (type == TEAM_CURRENT) {
      showAllTeam();
      var toHide = $(".team-member").filter(function() {
        if ($(this).attr("data-year") > GRAD_YEAR) return false;
        return true;
      });
      toHide.parent().css("display", "none");
    }
    else if (type == TEAM_EVERYONE) {
      showAllTeam();
    }
    else if (type == TEAM_ALUMNI) {
      showAllTeam();
      var toHide = $(".team-member").filter(function() {
        if ($(this).attr("data-year") <= GRAD_YEAR) return false;
        return true;
      });
      toHide.parent().css("display", "none");
    }
    else {
      console.log("Team type not supported");
    }
  }

  // Shows the entire team;
  function showAllTeam() {
    $(".team-member").parent().css("display", "inline-block");
  }
});