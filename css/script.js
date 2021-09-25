$(document).ready(function () {
  $(window).scroll(function () {
    var headerHeight = $("header").height();
    if ($(window).scrollTop() > headerHeight) {
      $("header.header").addClass("header-fixed");
    } else if ($(window).scrollTop() < headerHeight) {
      $("header.header").removeClass("header-fixed");
    }
  });
});
