$(document).ready(function(){
  // Roster isotope grid
  // var $roster_container = $('#roster .grid');
  // $('#roster .grid').isotope({
      // itemSelector: '#roster .grid-item',
      // masonry: {
        // columnWidth: $roster_container.width() / 6,
      // }
  // });
//
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
    console.log($new_src);
    $img = $('<img src="' + $new_src + '" id="asd" />');

    $img.on('load', function() {
      $width = $(this).prop("width");
      $height = $(this).prop("height");
      console.log($width, $height);
      if ($width > $height) {
        $(this).css("width", "60%");
        console.log("long");
        $(this).css("margin-top", "20vh");
      } else {
        $(this).css("width", "40%");
        $(this).css("margin-top", "10vh");
        console.log("tall");
      }

      $window_height = $(window).height();
      console.log($window_height, $height);
      $("#media .pop").append($(this));
    });

    // $("#media .pop").children(":first").attr("src", $new_src);
    $("#media .background").css("display", "block");
    // $("#media .pop img").css("width", "60%");

    // $image = $("#popup-img");
    // $image.load(function() {
      // console.log($(this).height(), $(this).width());
    // });
    //
    // $img_height = $("#media .pop img").first().height();
    // $window_height = $(window).height();
    // console.log($img_height);
    // console.log($window_height);
    // $margin_top = ($window_height / 4);
    // $("#media .pop").css("margin-top", $margin_top);
    // $("#media .pop").css("margin-bottom", $margin_top);
  });
  $("#media-bg").click(function(e) {
    if (e.target.id == "asd" || $(e.target).parents("#asd").length) {
    } else {
      $("media.background").css("display", "none");
      $("#media .pop").empty();
    }
  });
  // $("#media-bg").on("click", function() {
    // console.log($(this).attr('id'));
    // if ($(this).attr('id') == "media-pop"){
      // console.log("true");
    // }
    // $(this).css("display", "none");
    // $("#media .pop").empty();
  // });
//
  // Highlighting the sidebar text
  var pathname = window.location.pathname;
  var ind = pathname.indexOf("/", 1);
  var filename = pathname.substring(ind + 2, pathname.length-5);
  if (filename.length <= 1) {
    filename = "news";
  }
  $("#" + filename + "-bar a").addClass("active");
});
