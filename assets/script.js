$(document).ready(function(){
  // Media isotope grid
  var $media_grid = $('#media .grid').imagesLoaded().progress(function() {
    $media_grid.isotope({
      itemSelector: '#media .grid-item',
      masonry: {
        columnWidth: 106.66666,
        gutter: 5
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
