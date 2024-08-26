// jQuery onLoad function
$(function(){
  setInterval("updateResult()", 5000);
  
})

function updateResult() {
  var $active = $('#animation div.active');

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


