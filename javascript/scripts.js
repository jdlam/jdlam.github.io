console.log('loaded');

$(document).ready(function(){

  bindBacktoTop();
  bindNavButtons('#ed-btn', '#education');
  bindNavButtons('#exp-btn', '#experience');
  bindNavButtons('#proj-btn', '#projects');
  bindNavButtons('#skill-btn', '#skills');

})

function bindBacktoTop() {
  $('#intro-btn').click(function(){
    $('html, body').animate({
      scrollTop: 0
    }, 800, 'easeOutCubic');
  })
}

function bindNavButtons(button, div) {
  $(button).click(function(){
    $('html, body').animate({
      scrollTop: $(div).offset().top
    }, 1000, 'easeOutCubic');
  });
}
