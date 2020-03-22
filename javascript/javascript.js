$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,

    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:3
        }
    }

  
})
 $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })