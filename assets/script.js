$(document).ready(function(){
  // Roster isotope grid
  var $roster_grid = $('#roster .grid').imagesLoaded().progress(function() {
    $roster_grid.isotope({
      itemSelector: '#roster .grid-item',
      masonry: {
        columnWidth: 300,
      }
    });
  });

  // Media isotope grid
  var $media_container = $('#media .container');
  var $media_grid = $('#media .grid').imagesLoaded().progress(function() {
    $media_grid.isotope({
      itemSelector: '#media .grid-item',
      masonry: {
        columnWidth: $media_container.width() / 6,
      }
    });
  });

  // Highlighting the sidebar text
  var pathname = window.location.pathname;
  var ind = pathname.indexOf("/", 1);
  var filename = pathname.substring(ind + 2, pathname.length-5);
  if (filename.length <= 1) {
    filename = "news";
  }
  $("#" + filename + "-bar a").addClass("active");
});
