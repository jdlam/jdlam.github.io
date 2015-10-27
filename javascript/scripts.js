console.log('loaded');

$(document).ready(function(){

  bindNavButtons('#intro-btn', '#intro', false);
  bindNavButtons('#ed-btn', '#education', false);
  bindNavButtons('#exp-btn', '#experience', false);
  bindNavButtons('#proj-btn', '#projects', false);
  bindNavButtons('#skill-btn', '#skill-top', true);

})


function bindNavButtons(button, div, test) {
  var val;
  if(test) {
    val = 75;
  } else {
    val = 0;
  }
  $(button).click(function(){
    $('html, body').animate({
      scrollTop: $(div).offset().top-val
    }, 1000, 'easeOutCubic');
  });
}
