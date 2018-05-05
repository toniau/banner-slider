$(document).ready(function(){
  /*$('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10
  }); */
  
  $('.right-panel').hover(
    function(){
      $(this).css('z-index',4);
    }, function(){
      setTimeout(changeIndex, 500);
  });
  
  $('.left-panel').click(function(){
    
  })
});

function changeIndex() {
  $('.right-panel').css('z-index',1);
}