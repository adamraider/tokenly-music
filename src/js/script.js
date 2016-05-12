$(document).ready(function(){
  var i = 0;
  var $ul = $("#text_rotator");
  var $li = $("#text_rotator li").eq(0);
  var $lis = $("#text_rotator li");

  if (window.matchMedia("(min-width:900px)").matches) {
    /* the viewport is at least 900 pixels wide */
    $("#text_static").hide();
    $("#text_rotator_wrapper").show();
    $ul.css({
      'marginTop' : '0',
      'width' : $lis.eq(0).width()
    })
    startSwitcher();
  } else {
    /* the viewport is less than 900 pixels wide */
    $("#text_static").show();
    $("#text_rotator_wrapper").hide();
  }

  function startSwitcher() {
    setInterval(function() {
      switchText();
    }, 3400);
  }
  function switchText(){
    if (i == $lis.length - 1) {
      i = 0;
      $ul.animate({
        'marginTop' : '0',
        'width' : $lis.eq(i).width()
      }, 1400, "swing")
    } else {
      i++;
      $ul.animate({
        'marginTop' : '-=' + $li.outerHeight(),
        'width' : $lis.eq(i).width()
      }, 1400, "swing")
    }
  }
});