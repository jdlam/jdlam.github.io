console.log('loaded');

$(document).ready(function(){

  bindNavButtons('#intro-btn', '#intro', 50);
  bindNavButtons('#ed-btn', '#education', 0);
  bindNavButtons('#exp-btn', '#experience', 50);
  bindNavButtons('#proj-btn', '#projects', 100);
  bindNavButtons('#skill-btn', '#skill-top', 75);

})


function bindNavButtons(button, div, val) {
  if($(window).width() < 790 && div === '#projects') {
    val -= 150;
  } else if($(window).width() > 1000 && div === '#projects') {
    val = 25;
  }
  $(button).click(function(){
    $('html, body').animate({
      scrollTop: $(div).offset().top-val
    }, 1000, 'easeOutCubic');
  });
}
