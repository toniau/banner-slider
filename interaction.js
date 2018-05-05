$(document).ready(function(){
  /*$('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10
  }); */
  
  $('.right-panel').hover(
    function(){
      $(this).css('z-index', 4);
      $(this).addClass('expand-left');
    }, function(){
      setTimeout(changeIndex, 100)
      $(this).removeClass('expand-left');
      $('.right-panel').promise().done(function(){

      if($('.left-panel').is(':hover')) {
        $('.left-panel').addClass('expand-right2');
        console.log('EXECUTED if(L_PAN hover)');
      }
    });
  });
  
  $('.left-panel').hover(
    function(){
      $(this).removeClass('expand-right2');
      $(this).addClass('expand-right');
      console.log("I just executed normal L-PAN hover")
    }, function() {
      $(this).removeClass('expand-right');
    }
  );
  
  $('.left-panel').click(function(){
    // remember to look at gifffer for play/pause GIF lib
    $(this).css('background-image', 'url(imgs/hk-stag2.jpg)')
  })
});

function changeIndex() {
  $('.right-panel').css('z-index', 1);
}