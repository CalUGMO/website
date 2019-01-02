$(document).ready(function(){
  var $grid = $('.grid').imagesLoaded().progress(function() {
    $grid.isotope({
      itemSelector: '.grid-item',
      masonry: {
        columnWidth: 106.66666,
        gutter: 5
      }
    });
  });
});
