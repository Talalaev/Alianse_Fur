$(function() {
  var width_title_dropdown_menu;
  $("#slider-range").slider({
    range: true,
    min: 18000,
    max: 50000,
    values: [22650, 31643],
    slide: function(event, ui) {
      return $("#amount").val(ui.values[0] + "р. - " + ui.values[1] + "р.");
    }
  });
  $("#amount").val($("#slider-range").slider("values", 0) + "р. - " + $("#slider-range").slider("values", 1) + "р.");
  width_title_dropdown_menu = $('ul.nav li.dropdown').hover(function() {
    return $('.dropdown-menu', this).fadeIn();
  }, function() {
    return $('.dropdown-menu', this).fadeOut('fast');
  }).outerWidth();
  $(window).resize(function() {
    if ($('body').outerWidth() < 1199) {
      return $('.sidebar .filter .collapse').collapse('hide');
    } else {
      return $('.sidebar .filter .collapse').collapse('show');
    }
  });
  if ($('body').outerWidth() < 1199) {
    return $('.sidebar .filter .collapse').removeClass('in');
  } else {
    return $('.sidebar .filter .collapse').addClass('in');
  }
});
