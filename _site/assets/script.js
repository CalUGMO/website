$(document).ready(function(){
  // Roster click handling
  $("#roster .grid-item").on("click", function() {
    $name = $(this).data("name");
    console.log($name);
    $("#" + $name).css("display", "block");
  });

  $("#roster .background").click(function(e) {
    if (e.target.className == "pop" || $(e.target).parents(".pop").length) {
      // Inside
    } else {
      // Outside
      $(this).css("display", "none");
    }
  });



  // Media isotope grid
  var $media_container = $('#media .container');
  var $media_grid = $('#media .grid').imagesLoaded().progress(function() {
    $media_grid.isotope({
      itemSelector: '#media .grid-item',
      masonry: {
        columnWidth: $media_container.width() / 9,
      }
    });
  });
  
  //Media click handling
  $("#media .grid-item").on("click", function() {
    $src = $(this).children(":first").attr("src");
    $new_src = $src.substring(0, 15) + $src.substring(26, $src.length);
    $img = $('<img src="' + $new_src + '" id="asd" />');
    $img.on('load', function() {
      $width = $(this).prop("width");
      $height = $(this).prop("height");
      if ($width > $height) {
        $(this).css("width", "60%");
        $(this).css("margin-top", "20vh");
      } else {
        $(this).css("width", "40%");
        $(this).css("margin-top", "10vh");
      }
      $window_height = $(window).height();
      $("#media .pop").append($(this));
      $("#media-bg").css("display", "block");
    });
  });

  $("#media-bg").click(function(e) {
    if (e.target.id == "asd" || $(e.target).parents("#asd").length) {
    } else {
      $("#media-bg").css("display", "none");
      $("#media .pop").empty();
    }
  });

  // Highlighting the sidebar text
  var pathname = window.location.pathname;
  var ind = pathname.indexOf("/", 1);
  var filename = pathname.substring(ind + 2, pathname.length-5);
  if (filename.length <= 1) {
    filename = "news";
  }
  $("#" + filename + "-bar a").addClass("active");

  // Justifies Gallery
  $("#media_img_gallery").justifiedGallery();
});
