// IIFE - Immediately Invoked Function Expression
(function ($, window, document) {

  // The $ is now locally scoped 
  // Listen for the jQuery ready event on the document
  $(document).ready(function () {

    // The DOM is ready!

    $('.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      mouseDrag: false,
      touchDrag: false
     }); 

    let left_panel     = $('.left-panel'),
        right_panel    = $('.right-panel'),
        panel_content  = $('.panel-content'),
        panel_close    = $('.panel-close');
    
    /* ---------
    ** LEFT Panel Functions
    ** Handles hovering and clicking actions of LEFT banner panel only.
    ** To edit animations, see CSS classes tagged as 'left-panel__*'.
    ** --------- */
    left_panel.on({
      
      'mouseenter': function() {
        $(this).removeClass('left-panel__expand2')
        right_panel.css('z-index', 1)
        panel_content.hide()
        right_panel.addClass('right-panel__collapse')
        $(this).addClass('left-panel__expand')
      },
      
      'mouseleave': function() {
        $(this).removeClass('left-panel__expand left-panel__full')
        right_panel.removeClass('right-panel__collapse')
        panel_close.hide()
      },
      
      'click': function(event) {
        $(this).addClass('left-panel__full')
        console.log("ADDED CLASS: left-panel__full")
        $('.left-panel .panel-close').show()
        $('.left-panel .panel-content').fadeIn()
        
        if($('.left-panel .panel-close').data('clicked')){
          left_panel.removeClass('left-panel__expanded left-panel__full')
          console.log('removed LP_FULL')
          panel_content.fadeOut()
          panel_close.hide()
          panel_close.removeData('clicked')
        }
        
      }
    });
    
    /* ---------
    ** RIGHT Panel Functions
    ** Handles hovering and clicking actions of RIGHT banner panel only.
    ** To edit animations, see CSS classes tagged as 'right-panel__*'.
    ** --------- */
    right_panel.on({
      
      'mouseenter': function() {
        panel_content.hide()
        $(this).css('z-index', 4)
        left_panel.addClass('left-panel__collapse')
        $(this).addClass('right-panel__expand')
      },
      
      'mouseleave': function() {
        setTimeout(changeIndex, 50)
        $(this).removeClass('right-panel__expand right-panel__full')
        left_panel.removeClass('left-panel__collapse')
        panel_close.hide()
        
        /*right_panel.promise().done(function () {
          
          if (left_panel.is(':hover')) {
            left_panel.addClass('left-panel__expand2')
            console.log('EXECUTED if(L_PAN hover)')
          }
        }); */
      },
      
      'click': function() {
        $(this).addClass('right-panel__full')
        $('.right-panel .panel-close').show()
        $('.right-panel .panel-content').fadeIn()
        
        if($('.right-panel .panel-close').data('clicked')){
          right_panel.removeClass('right-panel__expanded right-panel__full')
          console.log('removed RP_FULL')
          panel_content.fadeOut('slow')
          panel_close.hide()
          panel_close.removeData('clicked')
        }
      }
    });
    
    /* ---------
    ** Inner Panel Function: CLOSE
    ** Listens for click on panel close.
    ** --------- */
    panel_close.on({
      'click': function() {
        $(this).data('clicked', true);
        console.log("clicked panel close");
      }
    })
    
  // End doc ready  
  });

  
  function changeIndex() {
    $('.right-panel').css('z-index', 1);
  }

}(window.jQuery, window, document));
// The global jQuery object is passed as a parameter