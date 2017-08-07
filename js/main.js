 
/*for owl demo1*/
$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
      // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    autoPlay:3000,
    
    transitionStyle : "fadeUp"
    //transitionStyle : "backSlide"
    //transitionStyle : "fade"
    //transitionStyle : "goDown"
     
    // "singleItem:true" is a shortcut for:
    // items : 1,
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false
     
    });
 
});

/*for owl-demo2*/
$(document).ready(function() {
 
    $("#owl-demo2").owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        autoPlay:3000,
        transitionStyle : "backSlide"
     
    });
 
});



