/* Languages */
var w = $("body").innerWidth();
var thislang = $('html')[0].lang, fm = false, fg = false, fn = false;
/*$(function() {
    $('.languages').on('change', function() {
        var opl = $(".languages option:selected").val();
        if (opl == "en") {
            console.log(opl);
            window.location = "index-en.html";
        }
        if (opl == "ua") {
            console.log(opl);
            window.location = "index-ua.html";
        }
        if (opl == "ru") {
            console.log(opl);
            window.location = "index-ru.html";
        }
        return false;
    });
});*/
$(function() {
    var elem = document.querySelector(".languages a:first-child");
    if (thislang == 'en') {
        var p = document.createElement("img");
        p.src = "img/en.png";
        elem.appendChild(p);
        //$(elem).css('background', 'url(img/en.png)');
    }
    if (thislang == 'uk') {
        var p = document.createElement("img");
        p.src = "img/ua.png";
        elem.appendChild(p);
    }
    if (thislang == 'ru') {
        var p = document.createElement("img");
        p.src = "img/ru.png";
        elem.appendChild(p);
    }
});
$('.topnav > .icon').click(function() {// Show if it is devise. Then language pictogram should be if menu was clicked.
    if (this.fm === false) {
        $('.languages').show();
        this.fm = true;
    }
    else {
        $('.languages').hide();
        this.fm = false;
    }
});

/* Stick elements*/
$(".ontop").hide();
$(window).scroll(function () {
    if ($(window).scrollTop() > 600) {//if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
        $(".ontop").show(200);
    }
    if ($(window).scrollTop() < 600) {
        $(".ontop").hide(); //reached the desired point -- show div
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
.click(function(event) {
    // On-page links
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
    if (w > 768)
        sr.reveal('.gall-row', 50);
});
/* Animation for headings */
var $p = $(".heading_style");
var arl = [], i = $p.length - 1;
$(window).on('resize scroll', function() {
    $('.heading_style').each(function() {
        var active = $(this).attr('id');
        if ($(this).isInViewport() && arl[i] != $p.index($(this))) {
            $('.heading_style').toggleClass('anim_h');
            arl[i] = $p.index($(this));
        }
    });
});
/* Styling the banner when page load */
$(document).ready(function() {
    //var elem = document.querySelector(".banner_text");
    //var p1 = document.createElement("div");
    ///elem.appendChild(p1);
    //$(".banner_text div").append('<img src="http://selfyofficial.com.ua/wp-content/uploads/2016/04/bg3.jpg"/>');
    /*var w_b = $("body").innerWidth();
    if (w_b < 1600) {
        calcGraphics(w_b);
    }*/
    $('.ip-loader').css('opacity', 0);
    $('#flash1').hide();
    $('#flash2').hide();
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
    //var elem1 = document.querySelector(".banner_text");
    var p1 = document.createElement("img");
    p1.src = "for_header/iphone1m1.png";
    $('#selfie_stick').hide();
    $(p1).css('width', '50%');
    elem.appendChild(p1);
    /*$(p1).animate({
        transform: "scale(0.7)"
    }, 2000 );*/
    //var p2 = document.createElement("div");
    //elem1.appendChild(p2);
    setTimeout(function() {
        $('#camera').show();
        $('#camera').addClass('anim-camera');
    }, 1000);
    setTimeout(function() {
        $('#camera').hide();
        $('#selfie_stick').show();
        p1.src = "for_header/iphone1m2.png";
        $(p1).addClass('iphone_big');
        $(p1).css('transform', 'scale(0.7)');
    }, 4200);
    setTimeout(function() {
        $('#square').show();
        //$(p2).addClass('anim_bg1');
    }, 5000);
    setTimeout(function() {
        //$('.anim_bg1').remove();
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
    }, 7200);
});
/*function Animate1(el) {//this and next function repeat
    $({deg: 0}).animate({deg: 180}, {
        duration: 500,
        step: function(now){
            $('.anim_svgs svg').css({
                 transform: "rotate(" + now + "deg)"
            });
        }
    });
}
function appear(x) {
    //$('.anim_svgs svg').delay(10).animate({top:100},interval);
    $(x).animate({
        opacity: 1,
        height: '300px'
    }, 800)//, 5000, function() {Animate2()};
}
function disappear(x) {
    $(x).animate({
        opacity: 0,
        height: '600px'
    }, 800)
}*/

/* Menu */
function onMenu() {
    var nav = document.getElementById('menu'),
    body = document.body;
    if (nav.className === "topnav") {
        nav.className += " responsive";
    } else {
        nav.className = "topnav";
    }
}
function onLanguages() {
    var lang = document.getElementById('lang'),
    body = document.body;
    if (lang.className === "languages") {
        lang.className += " lang_opt";
        if (w > 1025)
            $('.languages').css('width', '150px');
        else
            $('.languages').css('width', '120px');
    }
    else {
        lang.className = "languages";
        $('.languages').css('width', '120px');
    }
}
/* Selection language */
/*$("select").click(function(e) {
     var $target = $(e.target); 
     //if($target.is('option')) {
        //var opt = $(this).find("option:selected");
        //opt.text("Select");
        //var $opt = $("select")[0];
        //$opt.text("Select");
        if ($target.is('option')) {
            alert('sdfsd');
            //var vOptionSelect = ".languages";
            //var l= $(vOptionSelect).find(":selected").index();
            //alert(l);
            //$(selectElement).prop('selectedIndex', savedIndex);
            //alert($target.prop('selectedIndex'));
            //if ($(".languages option:selected").index() == 0)//($(this).text == "English")
                //console.log("English");
        }
        //alert($target.attr("id"));//Will alert id if it has id attribute
        //alert(opt);//Will alert the text of the option
        //alert($target.val());//Will alert the value of the option
});*/

/* Date show in footer */
var d = new Date();
var m = d.getMonth() + 1;
document.getElementById("date").innerHTML = d.getDate() + "." + m + "." + d.getFullYear();

/* Gallery */
var modal1 = document.getElementById('m1');
var modal2 = document.getElementById('m2');
slideIndex = 0;
var btn_g1 = document.querySelector('.next');
var btn_g2 = document.querySelector('.prev');

btn_g1.addEventListener('click', function() {// event handlers
    showSlide(slideIndex += 1);
});
btn_g2.addEventListener('click', function() {
    showSlide(slideIndex -= 1);
});
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 37 || event.keyCode == 40)
        showSlide(slideIndex -= 1);
    if (event.keyCode == 38 || event.keyCode == 39)
        showSlide(slideIndex += 1);
});
$('.gall-row').on('click', 'img', function() {
    var img = $(this).prev("a").attr("href");//img = obj.getAttribute("href"); //slideIndex = parseInt(obj.getAttribute("alt"));
    var modalImg = document.getElementById("img_modal1");
    modalImg.src = img;
    modal1.style.display = "block";
    slideIndex = parseInt($('.gall-row img').index(this));
});
$('.news_cell').on('click', 'img', function() {
    var img = $(this).attr("src");
    var modalImg = document.getElementById("img_modal2");
    modalImg.src = img;
    modal2.style.display = "block";
});
document.getElementById("close1").onclick = function() {
    modal1.style.display = "none";
}
document.getElementById("close2").onclick = function() {
    modal2.style.display = "none";
}
function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("gall-row");
    if (n > slides.length-1) {
        slideIndex = 0;
        n = 0;
    }    
    if (n < 0) {
        slideIndex = slides.length-1;
        n = slides.length-1;
    }
    var im = $(slides[n]).find('a').attr("href");
    var modalImg = document.getElementById("img_modal1");
    modalImg.src = im;
}

/* Click button for loading images in gallery and news. Also align button */
/*$(document).ready(function() {
    var w = $("body").innerWidth();
    var w_b = $('#news .button_load').innerWidth();
    console.log('button_load ' + w_b);
    w_b = (w-w_b)/3;
    $('#news .button_load').css('padding-left', w_b);
    hidePhotos(w);
    hideNews(w);
});*/

/* Button for gallery, that appears on devices */
$('#gallery_block button').click(function() {
    var w = $("body").innerWidth();
    if (fg === false) {
        showPhotos(w);
        fg = true;
    }
    else {
        hidePhotos(w);
        fg = false;
    }
});

/* News Columns */
/*var w = $('body').innerWidth();
var w_b = $('#news .button_load').innerWidth();
console.log('button-load ' + w_b);
w_b = (w-w_b)/2;
$('#news .button_load').css('padding-left', w_b);*/
/*$(document).ready(function() {
    var w = $("body").innerWidth();
    if ((w > 500) && (w < 768)) {
        var hei_even = $('.news_cell:nth-child(even)').height();
        var hei_odd = $('.news_cell:nth-child(odd)').height();//var hei = (hei_even > hei_odd) ? hei_even : hei_odd;
        if (hei_even > hei_odd)
            $('.news_cell:nth-child(even)').find('.news_text').css('height', hei_even);
        else
            $('.news_cell:nth-child(even)').find('.news_text').css('height', hei_odd);
        console.log(hei_even + ' ' + hei_odd);
    }
    if (w > 768) {
        var hei_even = $('.news_cell:nth-child(even)').height();
        var hei_odd = $('.news_cell:nth-child(odd)').height();
        var hei_3n = $('.news_cell:nth-child(3n)').height();
        if (hei_even > hei_odd)
            $('.news_cell:nth-child(even)').find('.news_text').css('height', hei_even);
        else
            $('.news_cell:nth-child(even)').find('.news_text').css('height', hei_odd);
    }
});*/
$('#news button').click(function() {
    var w = $("body").innerWidth();
    if (fn === false) {
        showNews(w);
        fn = true;
    }
    else {
        hideNews(w);
        fn = false;
    }
});

/* Functions for buttons */
function showPhotos(w1) {
    var slides = document.getElementsByClassName("gall-row");
    if ((w1 > 500) && (w1 < 768)) {
        for (i = 9; i < slides.length; i++) {
            slides[i].style.display = "block";
        }
        nameBtnHide();
    }
    if (w1 < 501) {
        for (i = 9; i < slides.length; i++) {
            slides[i].style.display = "block";
        }
        nameBtnHide();
    }
}
function hidePhotos(w1) {
    var slides = document.getElementsByClassName("gall-row");
    if ((w1 > 500) && (w1 < 768)) {
        for (i = 9; i < slides.length; i++) {
            slides[i].style.display = "none";//Erase all rest images
        }
        nameBtnShow();
        //var nav = document.getElementById('menu'), body = document.body;
        //$('#gallery_block button').show();
    }
    if (w1 < 501) {
        for (i = 1; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        nameBtnShow();
    }
}
function showNews(w1) {
    var news = document.getElementsByClassName("news_cell");
    if ((w1 > 500) && (w1 < 768)) {
        for (i = 2; i < slides.length; i++) {
            news[i].style.display = "block";
        }
        nameBtnHideNews();
    }
    if (w1 < 501) {
        for (i = 1; i < news.length; i++) {
            news[i].style.display = "block";
        }
        nameBtnHideNews();
    }
    else {
        for (i = 3; i < news.length; i++) {
            news[i].style.display = "block";//Erase all rest images
        }
        nameBtnHideNews();
    }
}
function hideNews(w1) {
    var news = document.getElementsByClassName("news_cell");
    if ((w1 > 500) && (w1 < 768)) {
        for (i = 2; i < news.length; i++) {
            news[i].style.display = "none";//Erase all rest images
        }
        nameBtnShowNews();
    }
    if (w1 < 501) {
        for (i = 1; i < news.length; i++) {
            news[i].style.display = "none";
        }
        nameBtnShowNews();
    }
    else {
        for (i = 3; i < news.length; i++) {
            news[i].style.display = "none";//Erase all rest images
        }
        nameBtnShowNews();
    }
}
function nameBtnHide() {
    if (thislang == 'en')
        $("#gallery_block button").text('Hide photographs');//$("button:lang(en-us)").text('Hide');
    if (thislang == 'uk')
        $("#gallery_block button").text('Приховати фотографії');
    if (thislang == 'ru')
        $("#gallery_block button").text('Спрятать фотографии');
}
function nameBtnShow() {
    if (thislang == 'en')
        $("#gallery_block button").text('Load rest photographs');
    if (thislang == 'uk')
        $("#gallery_block button").text('Завантажити решта фотографій');
    if (thislang == 'ru')
        $("#gallery_block button").text('Загрузить остальние фотографии');
}
function nameBtnHideNews() {
    if (thislang == 'en')
        $("#news button").text('Hide news');
    if (thislang == 'uk')
        $("#news button").text('Приховати новини');
    if (thislang == 'ru')
        $("#news button").text('Спрятать новости');
}
function nameBtnShowNews() {
    if (thislang == 'en')
        $("#news button").text('Load rest news');
    if (thislang == 'uk')
        $("#news button").text('Завантажити решта новин');
    if (thislang == 'ru')
        $("#news button").text('Загрузить остальние новостей');
}