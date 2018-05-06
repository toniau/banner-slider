// IIFE - Immediately Invoked Function Expression
(function ($, window, document) {

  // The $ is now locally scoped 

  // Listen for the jQuery ready event on the document
  $(document).ready(function () {

    // The DOM is ready!

    /*$('.owl-carousel').owlCarousel({
       `items: 1,
       loop: true,
       margin: 10
     }); */

    let left_panel  = $('.left-panel'),
        right_panel = $('.right-panel'),
        panel_blurb = $('.panel-blurb');
    
    /* ---------
    ** LEFT Panel Functions
    ** Handles hovering and clicking actions of LEFT banner panel only.
    ** To edit animations, see CSS classes tagged as 'left-panel'.
    ** --------- */
    left_panel.on({
      
      'mouseenter': function() {
        $(this).removeClass('left-panel__expand2');
        $(this).addClass('left-panel__expand');
        console.log("EXECUTED normal L_PAN hover");
      },
      
      'mouseleave': function() {
        $(this).removeClass('left-panel__expand left-panel__full');
        $('.panel-content').hide();
      },
      
      'click': function() {
        $(this).addClass('left-panel__full')
        $('.left-panel .panel-content').show()
      }
    });
    
    /* ---------
    ** RIGHT Panel Functions
    ** Handles hovering and clicking actions of RIGHT banner panel only.
    ** To edit animations, see CSS classes tagged as 'right-panel'.
    ** --------- */
    right_panel.on({
      
      'mouseenter': function() {
        $(this).css('z-index', 4);
        $(this).addClass('right-panel__expand');
      },
      
      'mouseleave': function() {
        setTimeout(changeIndex, 100)
        $(this).removeClass('right-panel__expand right-panel__full');
        $('.panel-content').hide();
        
        right_panel.promise().done(function () {

          if (left_panel.is(':hover')) {
            left_panel.addClass('left-panel__expand2');
            console.log('EXECUTED if(L_PAN hover)');
          }
        });
      },
      
      'click': function() {
        $(this).addClass('right-panel__full')
        $('.right-panel .panel-content').show()
      }
    });

    
  // End doc ready  
  });

  
  function changeIndex() {
    $('.right-panel').css('z-index', 1);
  }

}(window.jQuery, window, document));
// The global jQuery object is passed as a parameter