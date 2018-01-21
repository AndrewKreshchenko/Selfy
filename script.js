/* Check before close current page */
window.onbeforeunload = function(event) {
    var message = 'Important: Please click on \'Save\' button to leave this page.';
    if (typeof event == 'undefined') {
        event = window.event;
    }
    if (event) {
        event.returnValue = message;
        if (fc !== true)
            localStorage.clickcount = 1;
    }
    return;
}

/* Languages (1) */
var thislang = $('html')[0].lang, fm = false, fg = false, fn = false, fc = false, fa = false;
$(function() {
    var elem = document.querySelector(".languages a:first-child");
    var p = document.createElement("span");
    if (thislang == 'en')
        $(p).text('ENG');
    if (thislang == 'uk')
        $(p).text('УКР');
    if (thislang == 'ru')
        $(p).text('РУС');
    elem.appendChild(p);
});
/*$('.languages a:first-child').click(function() {// Show if it is devise. Then language pictogram should be if menu was clicked.
    if (this.fm === false) {
        $('.languages a').not('first-child').show();
        this.fm = true;
    }
    else {
        $('.languages a').not('first-child').hide();
        this.fm = false;
    }
});*/

/* Stick elements*/
$(".ontop").hide();
var headH = $('header').outerHeight();
$(window).scroll(function () {
    if ($(window).scrollTop() > headH) {//if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
        $("#menu").show(500);
        $("#lang").show(500);
        $(".ontop").show(500);
    }
    if ($(window).scrollTop() < headH) {
        $("#menu").hide();
        $("#lang").hide();
        $(".ontop").hide();
    }
});
$('.ontop').click(function() {
    $('html, body').animate({scrollTop: 0}, 'slow');
});
$('a.topnav').click(function() {
    $('html, body').animate({scrollTop: 0}, 'slow');
});
$('a[href*="#"]')
.not('[href="#"]')// Then Remove links that don't actually link to anything
.not('[href="#0"]')
.click(function(event) {//On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
                }, 500, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                };
            });
        }
    }
});

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

/* Smooth scrolling when any menu item was clicked. */
window.sr = ScrollReveal({
    duration: 2000
});
$(document).ready(function() {
    var w = $("body").innerWidth();
    $('.ip-loader').css('opacity', 0);
    $('#thisgallery1').css('display', 'none');
    var w = $("body").innerWidth();
    //var w_b = $('#news .button_load').innerWidth();
    //console.log('button_load ' + w_b);
    //w_b = (w-w_b)/3;
    //$('#news .button_load').css('padding-left', w_b);
    hidePhotos(w);
    hideNews(w);
    if (w > 767)
        sr.reveal('.gall-row', 50);
    else
        console.log("Not desktop (3508712197)");
    if (localStorage.clickcount > 1) {
        $('#anim_svgs').remove();
        $('.loader').remove();
        $('.banner_text').removeClass('anim_bg');
		$('.banner_text').addClass('animate-b-txt');
		setTimeout(function() {
			$('#banner').addClass('banner_photo');
		}, 2000);
        return;
    }
    $('#flash1').hide();
    $('#flash2').hide();
    $('#selfie_stick').hide();
    $('#camera').hide();
    $('#square').hide();
    var w_b = $("body").innerWidth();
    if (w_b < 1024 && w_b > 549) {
        $('#camera svg').css('transform', 'scale(0.7)');
        $('#square svg').css('transform', 'scale(0.7)');
    }
    if (w_b < 549) {
        $('#camera svg').css('transform', 'scale(0.5)');
        $('#square svg').css('transform', 'scale(0.5)');
    }
    $('.banner_text h1').css('opacity', 0);
    $('.banner_text h2').css('opacity', 0);
    $('.banner_text h3').css('opacity', 0);
    var elem = document.querySelector("#anim_svgs");
    var p1 = document.createElement("img");
    p1.src = "for_header/iphone1m1.png";
    $('#selfie_stick').hide();
    if (w_b > 767)
        $(p1).css('width', '50%');
    if (w_b < 768) {
        $(p1).css('width', '70%');
        if (window.innerWidth > window.innerHeight)
            $(p1).css('width', '60%');//('-webkit-transform', 'translateY(-100px)');
    }
    elem.appendChild(p1);
    setTimeout(function() {
        $('#camera').show();
        $('#camera').addClass('anim-camera');
    }, 1000);
    setTimeout(function() {
        $('#camera').hide();
        $('#selfie_stick').show();
        p1.src = "for_header/iphone1m2.png";
        $(p1).addClass('iphone_big');
        $(p1).css('transform', 'scale(0.8)');
    }, 4200);
    setTimeout(function() {
        $('#square').show();
    }, 5000);
    setTimeout(function() {
        $('#square').hide();
        $('#flash1').show();
        $('#flash2').show();
    }, 6500);
    setTimeout(function() {
        $('#flash1').hide();
        $('#flash2').hide();
    }, 7000);
    setTimeout(function() {
        $('#anim_svgs').remove();
        $('.loader').remove();
    }, 7200);
});
/* Animation for headings */
var $p = $(".heading_style");
var arl = [], i = $p.length - 1;
$(window).on('resize scroll', function() {
    $('.heading_style').each(function() {
        var w = $("body").innerWidth();
        var active = $(this).attr('id');
        if ($(this).isInViewport() && arl[i] != $p.index($(this))) {
            if (w > 549)
                $('.heading_style').toggleClass('anim_h');
            if (w < 549)
                $('.heading_style').toggleClass('anim_h_mob');
            arl[i] = $p.index($(this));
        }
    });
});

/* Languages (2) */
$('.languages a').not('first-child').click(function(event) {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
            fc = true;
        } else
            localStorage.clickcount = 1;
    } else
		alert("Sorry, your browser doesn't support WebStorage");
});
$('.languages a:first-child').on('click', function () {
  if(!$(event.target).closest('.languages a').length) {
        if($('.languages a').is(":visible")) {
            $('.languages a').hide();
        }
    }
});
function onLanguages() {
    var lang = document.getElementById('lang'),
    body = document.body;
    if (lang.className === "languages") {
        $('.languages').css('padding-bottom', 0);
        lang.className += " lang_opt";
        setTimeout(function() {
            lang.className = "languages";
            if (window.innerWidth > 767)
                $('.languages').css('padding-bottom', '10px');
        }, 5000);
    }
    else {
        lang.className = "languages";
        if (window.innerWidth > 767)
            $('.languages').css('padding-bottom', '10px');
    }
}

/* Menu */
function onMenu() {
    var nav = document.getElementById('menu'), body = document.body;
    if (nav.className === "topnav") {
        //$('.icon svg:nth-child(even)').addClass('closenav');
        $('.icon svg').find('path:first-child').addClass('path1');
        $('.icon svg').find('.path2_2').addClass('path2');
        $('.icon svg').find('path:last-child').addClass('path3');
        nav.className += " responsive";
        //$(".topnav").animate({opacity: 0}, 0).animate({opacity: 1}, 500);
        //$('.topnav a').not('.icon').animate({opacity: 0}, 0).animate({opacity: 1}, 500);
        //$('.topnav a').not('.icon').animate({left: -300}, 0).animate({left: 0}, 500);
    } else {
        //$('.topnav').find('.icon span:nth-child(even)').removeClass('closenav');
        $('.icon svg').find('path:first-child').removeClass('path1');
        $('.icon svg').find('.path2_2').removeClass('path2');
        $('.icon svg').find('path:last-child').removeClass('path3');
        nav.className = "topnav";
    }
}
/* Gallery*/
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 20,
    speed: 400,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
  },
});
var interval = false;
function slideA() {
    if (!interval) {
        $('#slider_auto').css('background-color', '#de3e52');
        swiper.autoplay.start();
        interval = true;
    }
    else {
        $('#slider_auto').css('background-color', '#555');
        window.clearInterval(interval);
        swiper.autoplay.stop();
        interval = false;
    }
}
slideIndex = 0, current = 0;
var w = $('body').innerWidth();
var h = $('body').innerHeight();
var modal3 = document.getElementById('thisgallery1');
function onInf() {
    tags = document.getElementById("membs").getElementsByTagName("p"),
    total = tags.length;
    var ar1 = $('#membs .more1'), ar2 = $('#membs .less1');
    if (fa == false) {
        for (var i = 1; i < total; i++)
            tags[i].style.display = 'block';
        ar1.css('display', 'none');
        ar2.css('display', 'block');
        fa = true;
    }
    else {
        for (var i = 1; i < total; i++)
           tags[i].style.display = 'none';
        ar1.css('display', 'block');
        ar2.css('display', 'none');
        fa = false;
    }
}
$('.gall-row').on('click', 'img', function() {
    //var im = $(this).prev("a").attr("href");//img = obj.getAttribute("href"); //slideIndex = parseInt(obj.getAttribute("alt"));
    //modalImg1.src = im;
    //modalImg2.src = "img/no.png";
    modal3.style.display = "block";
    slideIndex = parseInt($('.gall-row img').index(this));
    swiper.slideTo(slideIndex + 1, 0);
});
$('.news_cell').on('click', 'h3', function() {
    var h3 = $(this).text(), pd = $(this).parent().find('p:last').text(), ind = $('#news h3').index(this);
    var im = $('#news').find('img').eq(ind).attr("src");
    console.log("src + " + ind + " " + im);
    if (ind == 0) {//im = $(this).parent(".news_cell").find('img').attr("src"), 
        //var iframe = $('#m3 .embed_container');
        //iframe.src = "https://www.youtube.com/embed/RIc2g3g_pNw";
        $('#m3 .embed_container').css('display', 'block');
    }
    else
        $('#m3 .embed_container').css('display', 'none');
    toModalNews(h3, im, pd);
});
$('.news_cell').on('click', 'img', function() {
    var h3 = $(this).parent().find('h3').text(), im = $(this).attr("src"), pd = $(this).parent().find('p:last').text(), ind = $('#news img').index(this);
    if (ind == 0) {
        //var iframe = $('#m3 .embed_container');
        //iframe.src = "https://www.youtube.com/embed/RIc2g3g_pNw";
        $('#m3 .embed_container').css('display', 'block');
    }
    else
        $('#m3 .embed_container').css('display', 'none');
    toModalNews(h3, im, pd);
});
function toModalNews(h, i, p) {
    var modalImg = document.getElementById("img_modal");
    var mh = $('#m3 h3'), mpd = $('#m3 p:last');
    modalImg.src = i;
    mh.html(h);
    mpd.html(p);
    $('#m3').css('display', 'block');
}
$('#membs .memb1').on('click', function () {//.child img:first-c
    $('#m1').css('display', 'block');//$('#m2').find('img').addClass('modal-anim');
});
$('#membs .memb2').on('click', function() {//$('.child img').not('first-child').on('click', function() {
    $('#m2').css('display', 'block');
});
document.getElementById("close1").onclick = function() {
    $('#m1').css('display', 'none');
}
document.getElementById("close2").onclick = function() {
    $('#m2').css('display', 'none');
}
document.getElementById("close3").onclick = function() {
    $('#thisgallery1').css('display', 'none');
}
document.getElementById("close4").onclick = function() {
    $('#m3').css('display', 'none');
}
/* Button for gallery, that appears on devices */
function onPh() {
    var w = $("body").innerWidth();
    if (fg === false) {
        showPhotos(w);
        fg = true;
    }
    else {
        hidePhotos(w);
        fg = false;
    }
}
function onNews() {
    var w = $("body").innerWidth();
    if (fn === false) {
        showNews(w);
        fn = true;
    }
    else {
        hideNews(w);
        fn = false;
    }
}

/* Functions for buttons */
function showPhotos(w1) {
    var slides = document.getElementsByClassName("gall-row");
    var ar1 = $('#gallery_block .more1'), ar2 = $('#gallery_block .less1');
    if ((w1 > 500) && (w1 < 768)) {
        for (i = 9; i < slides.length; i++) {
            slides[i].style.display = "block";
        }
        ar1.css('display', 'none');
        ar2.css('display', 'block');
    }
    if (w1 < 501) {
        for (i = 9; i < slides.length; i++) {
            slides[i].style.display = "block";
        }
        ar1.css('display', 'none');
        ar2.css('display', 'block');
    }
}
function hidePhotos(w1) {
    var slides = document.getElementsByClassName("gall-row");
    var ar1 = $('#gallery_block .more1'), ar2 = $('#gallery_block .less1');
    if ((w1 > 500) && (w1 < 768)) {
        for (i = 9; i < slides.length; i++) {
            slides[i].style.display = "none";//Erase all rest images
        }
        ar1.css('display', 'block');
        ar2.css('display', 'none');
        //var nav = document.getElementById('menu'), body = document.body;
        //$('#gallery_block button').show();
    }
    if (w1 < 501) {
        for (i = 1; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        ar1.css('display', 'block');
        ar2.css('display', 'none');
    }
}
function showNews(w1) {
    var news = document.getElementsByClassName("news_cell");
    var ar1 = $('#news .more1'), ar2 = $('#news .less1');
    if ((w1 > 500) && (w1 < 768)) {
        for (i = 2; i < news.length; i++) {
            news[i].style.display = "block";
        }
        ar1.css('display', 'none');
        ar2.css('display', 'block');
    }
    if (w1 < 501) {
        for (i = 1; i < news.length; i++) {
            news[i].style.display = "block";
        }
        ar1.css('display', 'none');
        ar2.css('display', 'block');
    }
    else {
        for (i = 3; i < news.length; i++) {
            news[i].style.display = "block";
        }
        ar1.css('display', 'none');
        ar2.css('display', 'block');
    }
}
function hideNews(w1) {
    var ar1 = $('#news .more1'), ar2 = $('#news .less1');
    var news = document.getElementsByClassName("news_cell");
    if ((w1 > 500) && (w1 < 768)) {
        for (i = 2; i < news.length; i++) {
            news[i].style.display = "none";
        }
        ar1.css('display', 'block');
        ar2.css('display', 'none');
    }
    if (w1 < 501) {
        for (i = 1; i < news.length; i++) {
            news[i].style.display = "none";
        }
        ar1.css('display', 'block');
        ar2.css('display', 'none');
    }
    else {
        for (i = 3; i < news.length; i++) {
            news[i].style.display = "none";
        }
        ar1.css('display', 'block');
        ar2.css('display', 'none');
    }
}
