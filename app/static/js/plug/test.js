 $(document).ready(function() {
     
     
$('.comments__one').slick({
  centerMode: true,
  centerPadding: '370px',
  slidesToShow: 1,
  autoplay: true,
  arrows: false,
  dots: false,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
     
     
       
     
$('.comments__two').slick({
  centerMode: true,
  centerPadding: '50px',
  slidesToShow: 2,
  autoplay: true,
  arrows: false,
  dots: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
     
    
function close(){
    

$("#allpopup").fadeOut(500);
$("#allsite").fadeOut(500);

$("#popupfade").delay(500).fadeOut(500);
$("html").css('overflow' , 'auto');
clickAllSite == 0;  
    
} 
     
     
     
var clickAllSite = 0;
    
$("#allsiteopen").click(function () {
    
if (clickAllSite == 0)

$("#popupfade").fadeIn(500);
$("#allpopup").fadeIn(500);
$("#allsite").fadeIn(500);
$("html").css('overflow' , 'hidden');
clickAllSite == 1
    
}); 
    

     
    
$("#allclose").click(function () {
    

close();
    
}); 
        
     
});