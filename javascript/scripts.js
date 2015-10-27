console.log('loaded');

$(document).ready(function(){

  bindNavButtons('#intro-btn', '#intro');
  bindNavButtons('#ed-btn', '#education');
  bindNavButtons('#exp-btn', '#experience');
  bindNavButtons('#proj-btn', '#projects');
  bindNavButtons('#skill-btn', '#skills');
  bindNavButtons('#int-btn', '#interests');

})


function bindNavButtons(button, div) {
  $(button).click(function(){
    $('html, body').animate({
      scrollTop: $(div).offset().top
    }, 1000, 'easeOutCubic');
  });
}
