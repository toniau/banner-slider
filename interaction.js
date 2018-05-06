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
        $(this).addClass('left-panel__expand')
        console.log("EXECUTED normal L_PAN hover")
      },
      
      'mouseleave': function() {
        $(this).removeClass('left-panel__expand left-panel__full')
        panel_content.hide()
        panel_close.hide()
        left_panel.on('mouseenter')
        right_panel.on('mouseenter')
      },
      
      'click': function() {
        $(this).addClass('left-panel__full')
        $('.left-panel .panel-close').show()
        $('.left-panel .panel-content').show()
        
        if($('.left-panel .panel-close').data('clicked')){
          left_panel.removeClass('left-panel__expanded left-panel__full')
          console.log('removed LP_FULL')
          panel_content.hide()
          panel_close.hide()
          right_panel.off('mouseenter');
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
        $(this).css('z-index', 4)
        $(this).addClass('right-panel__expand')
      },
      
      'mouseleave': function() {
        setTimeout(changeIndex, 100)
        $(this).removeClass('right-panel__expand right-panel__full')
        panel_content.hide()
        panel_close.hide()
        left_panel.on('mouseenter')
        right_panel.on('mouseenter')
        
        right_panel.promise().done(function () {

          if (left_panel.is(':hover')) {
            left_panel.addClass('left-panel__expand2')
            console.log('EXECUTED if(L_PAN hover)')
          }
        });
      },
      
      'click': function() {
        $(this).addClass('right-panel__full')
        $('.right-panel .panel-close').show()
        $('.right-panel .panel-content').show()
        
        if($('.right-panel .panel-close').data('clicked')){
          left_panel.off('mouseenter')
          right_panel.removeClass('right-panel__expanded right-panel__full')
          console.log('removed LP_FULL')
          panel_content.hide()
          panel_close.hide()
          panel_close.removeData('clicked')
        }
      }
    });
    
    /*panel_collapse.on({
      'mouseenter': function() {
        let currentPanel = $(this).parent().parent();
      },
      'click': function() {
        let currentPanel = $(this).parent().parent();
        
        if(currentPanel.hasClass('right-panel__full')){
          currentPanel.removeClass('.right_panel__full .panel-content .panel-collapse')
          console.log('CLOSED : right panel')
        }
        else {
          currentPanel.removeClass('.left_panel__full .panel-content .panel-collapse')
          console.log('CLOSED : left panel')
        }
      }
    }) */
    
    
    /* ---------
    ** Inner Panel Function: CLOSE
    ** Listens for click on panel close.
    ** --------- */
    panel_close.on({
      'click': function() {
        $(this).data('clicked', true);
      }
    })
    
  // End doc ready  
  });

  
  function changeIndex() {
    $('.right-panel').css('z-index', 1);
  }

}(window.jQuery, window, document));
// The global jQuery object is passed as a parameter