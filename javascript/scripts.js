console.log('loaded');

$(document).ready(function(){

  bindBacktoTop();
  bindNavButtons('#ed-btn', '#education', 0);
  bindNavButtons('#exp-btn', '#experience', 50);
  bindNavButtons('#proj-btn', '#projects', 125);
  bindNavButtons('#skill-btn', '#skill-top', 75);

})

function bindBacktoTop() {
  $('#intro-btn').click(function(){
    $('html, body').animate({
      scrollTop: 0
    }, 800, 'easeOutCubic');
  })
}

function bindNavButtons(button, div, val) {
  if($(window).width() < 790 && div === '#projects') {
    val = -75;
  } else if($(window).width() > 1200 && div === '#projects') {
    val = 50;
  }
  $(button).click(function(){
    $('html, body').animate({
      scrollTop: $(div).offset().top-val
    }, 1000, 'easeOutCubic');
  });
}
