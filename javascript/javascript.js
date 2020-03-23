$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    navText: [
        '<i class="fa fa-fw fa-chevron-left" ></i>',
        '<i class="fa fa-fw fa-chevron-right" ></i>'
    ],
dots:false,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1020:{
            items:3
        }
    }

  
});
/*$(document).ready(function() {

 
    var owl = $("owl-slider");
   
    owl.owlCarousel({
        items : 10, //10 items above 1000px browser width
        itemsDesktop : [1000,5], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,3], // betweem 900px and 601px
        itemsTablet: [600,2], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
    });
   
    // Custom Navigation Events
    $(".next").click(function(){
      owl.trigger('owl.next');
    })
    $(".prev").click(function(){
      owl.trigger('owl.prev');
    })
 
  });*/