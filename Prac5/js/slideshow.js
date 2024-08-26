// jQuery onLoad function
$(function(){
  // run the changeImage function every 5000 ms
  setInterval("updateImage()", 5000);
  setInterval("updateText()", 5000);
})

function updateImage() {
  var $active = $('#slide_img .active');

  var $next = $active.next();

  if ($next.length === 0) {
    $next = $('#slide_img img:first');
  }

  $active.fadeTo(1000, 0.0, function() {
    $active.removeClass('active');
  });

  $next.fadeTo(1000, 1.0, function() {
    $next.addClass('active');
  });
}

function updateText() {
  var $active = $('#slide_info div.active');

  var $next = $active.next();

  if ($next.length === 0) {
    $next = $('#slide_info div:first');
  }

  $active.fadeTo(1000, 0.0, function() {
    $active.removeClass('active');
  });

  $next.fadeTo(1000, 1.0, function() {
    $next.addClass('active');
  });
}

