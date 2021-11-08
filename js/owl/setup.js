$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:["Anterior", "Próximo"],
    autoplay: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    slideBy:1,
    slideTransition: 'ease',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


 
 function toggVideo(){
     const trailer = document.querySelector('.trailer');
     const video =document.querySelector('video');
     trailer.classList.toggle('active');
     video.currentTime=0;
     video.pause();
    }
    