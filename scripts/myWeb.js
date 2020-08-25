$(document).ready(function() {
  // fix menu when passed
  $(".masthead").visibility({
    once: false,
    onBottomPassed: function() {
      $(".fixed.menu").transition("fade in");
    },
    onBottomPassedReverse: function() {
      $(".fixed.menu").transition("fade out");
    }
  });

  // create sidebar and attach to menu open
  $(".ui.sidebar").sidebar("attach events", ".toc.item");

          // lazy load images
  $(".image").visibility({
    type: "image",
    transition: "vertical flip in",
    duration: 500
  });
  $(".ui.progress").progress({
   showActivity: true,
   duration: '6000ms'
  });

});

    function scrollToAbout() 
    {
      if ($('.slideAbout').length != 0) 
      {
        $("html, body").animate({
          scrollTop: $('.slideAbout').offset().top
        }, 1000);
      }
    }
    function scrollToHome() 
    {
      if ($('.slideHome').length != 0) 
      {
        $("html, body").animate({
          scrollTop: $('.slideHome').offset().top
        }, 1000);
      }
    }
    function scrollToStart() 
    {
      if ($('.slideMore').length != 0) 
      {
        $("html, body").animate({
          scrollTop: $('.slideMore').offset().top
        }, 1000);
      }
    }  
    function scrollToExpirience() 
    {
      if ($('.slideXP').length != 0) 
      {
        $("html, body").animate({
          scrollTop: $('.slideXP').offset().top
        }, 1000);
      }
    }  
    function scrollToAbout() 
    {
      if ($('.slidAbout').length != 0) 
      {
        $("html, body").animate({
          scrollTop: $('.slidAbout').offset().top
        }, 1000);
      }
    }  
    function slidetoContact() 
    {
      if ($('.slidContact').length != 0) 
      {
        $("html, body").animate({
          scrollTop: $('.slidContact').offset().top
        }, 1000);
      }
    }
