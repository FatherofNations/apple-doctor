//Popup
$('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
var magnificPopup = $.magnificPopup.instance;
$('.dialog-close').click(function() {
	magnificPopup.close();
});
$('.mobile-menu-ref a').click(function() {
	magnificPopup.close();
});

//Swipe
$('#iphone').click(function() {
	$(this).addClass('active');
	$('#ipad').removeClass('active');
	$('.swiper').removeClass('active-swipe');
});

$('#ipad').click(function() {
	$(this).addClass('active');
	$('#iphone').removeClass('active');
	$('.swiper').addClass('active-swipe');
});

//Models
$('.models > ul > li > a').click(function() {
	$('.models > ul > li > a').removeClass('active');
	$(this).addClass('active');
});

//Feedback swipe
$('#iphone-fb').click(function() {
	$(this).addClass('active');
	$('#ipad-fb').removeClass('active');
	$('.swiper-fb').removeClass('active-swipe-fb');
});

$('#ipad-fb').click(function() {
	$(this).addClass('active');
	$('#iphone-fb').removeClass('active');
	$('.swiper-fb').addClass('active-swipe-fb');
});

//Owl Carousel
$('.owl-carousel-p').owlCarousel({
    loop:true,
    margin:60,
    responsiveClass:true,
    responsive:{
				0:{
					items:1,
					margin:10,
					nav:true,
					loop:true
			},
        550:{
            items:2,
						margin:10,
            nav:true,
						loop:true
        },
        800:{
            items:3,
            nav:true,
						loop:true
        },
        1200:{
            items:4,
            nav:true,
						loop:true
        }
    }
});

$('.owp').owlCarousel({
    loop:true,
    margin:60,
    responsiveClass:true,
		nav: true,
    responsive:{
				0:{
					items:1,
					margin:10,
					loop:true
			}
		}
});

$('.owl-mobile-carousel').owlCarousel({
    loop:true,
    margin:60,
    responsiveClass:true,
		nav: true,
    responsive:{
				0:{
					items:1,
					margin:10,
					loop:true
			}
		}
});

//Self
var sd = $( window ).width();
$( window ).resize(function() {
  sd = $( window ).width();
});
if (sd <= 768) {
	$('.qa .qa-content h2').click(function() {
		$(this).siblings("p").slideToggle();
		// $(pd + ' p').slideToggle();
	});
}

//Timer
//<![CDATA[
var dt = "Oct 1 2017 20:22:17";
var first = new Date(dt);
var last = Date.now();
var remeaning = first - last;
remeaning /= 1000;

var remain_bv   = remeaning;
function parseTime_bv(timestamp){
    if (timestamp < 0) timestamp = 0;

    var day = Math.floor( (timestamp/60/60) / 24);
    var hour = Math.floor(timestamp/60/60);
    var mins = Math.floor((timestamp - hour*60*60)/60);
    var secs = Math.floor(timestamp - hour*60*60 - mins*60);
    var left_hour = Math.floor( (timestamp - day*24*60*60) / 60 / 60 );

    $('span.afss_day_bv').text(day);
    $('span.afss_hours_bv').text(left_hour);

    if(String(mins).length > 1)
        $('span.afss_mins_bv').text(mins);
    else
        $('span.afss_mins_bv').text("0" + mins);
    if(String(secs).length > 1)
        $('span.afss_secs_bv').text(secs);
    else
        $('span.afss_secs_bv').text("0" + secs);

}

$(document).ready(function(){
    setInterval(function(){
        remain_bv = remain_bv - 1;
        parseTime_bv(remain_bv);
        if(remain_bv <= 0){
//
        }
    }, 1000);
});
//]]>

//Links
$("a.topLink").click(function() {
		 $("html, body").animate({
				scrollTop: $($(this).attr("href")).offset().top + "px"
		 }, {
				duration: 500,
				easing: "swing"
		 });
		 return false;
	});
