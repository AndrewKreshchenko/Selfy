var thislang = $('html')[0].lang, fm = false;
$(function() {
    if (thislang == 'en')
        $('.languages').css("background-image", "url('img/en.png')");
    if (thislang == 'uk')
        $('.languages').css("background-image", "url('img/ua.png')");
    if (thislang == 'ru')
        $('.languages').css("background-image", "url('img/ru.png')");
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

/* Languages */
$(function() {
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
sr.reveal('.gall-row', 50);

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
/* Change language */
//function check() {
    //$("select[name=Lang] option:first").text("Выбрать язык");
    //var ind = $(".languages").prop('selectedIndex');
    //alert($(".languages").prop('selectedIndex'));
    //alert($(".languages")[0].selectedIndex);
    //var l = $(".languages select:nth-child(1)").index();
    //var opl = $(".languages option:selected").val();
    //console.log(opl);
/*$('.languages').change(function () {
    // bind change event to select
        $(this).find('option:selected').css('color', 'green');
        var opl = $(".languages option:selected").val();
        console.log(opl);
        if (opl == "English")
        console.log(opl);
});*/

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
var img;
var modal = document.getElementById('m1');
var slideIndex = 1;
$('.gall-row').on('click', 'img', function() {
    img = $(this).prev("a").attr("href");//img = obj.getAttribute("href"); //slideIndex = parseInt(obj.getAttribute("alt"));
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = img;
    var span = document.getElementsByClassName("close")[0];// Get the <span> element that closes the modal, when the user clicks on <span> (x), close the modal.
});
document.getElementById("close1").onclick = function() {
    modal.style.display = "none";
}
function plusSlides(n) {
    showSlide(slideIndex += n);
}
function currentSlide(n) {
    showSlide(slideIndex = n);
}
function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("gall-row");
    if (n > slides.length) {
        slideIndex = 1
    }    
    if (n < 1) {
        slideIndex = slides.length
    }
    slide = slides[slideIndex-1];
    var im = $(slides[n]).find('a').attr("href");
    var modalImg = document.getElementById("img01");
    modalImg.src = im;
}

/* Click button for loading images in gallery */
$(document).ready(function() {
    var w = $("body").innerWidth();
    if ((w > 500) && (w < 768)) {
        var slides = document.getElementsByClassName("gall-row");
        for (i = 9; i < slides.length; i++) {
            slides[i].style.display = "none";//Erase all rest images
        }
        //var nav = document.getElementById('menu'), body = document.body;
        $('#gallery_block button').show();
    }
    if (w < 501) {
        var slides = document.getElementsByClassName("gall-row");
        for (i = 1; i < slides.length; i++) {
            slides[i].style.display = "none";//Erase all rest images
        }
        $('#gallery_block button').show();
    }
});
$('#gallery_block button').click(function() {
    var slides = document.getElementsByClassName("gall-row");
    var w = $("body").innerWidth();
    if ((w > 500) && (w < 768)) {
        for (i = 9; i < slides.length; i++) {
            slides[i].style.display = "block";
        }
        if (thislang == 'en')
            $("#gallery_block button").text('Hide'); //$( "button:lang(en-us)").text('Hide');
        if (thislang == 'uk')
            $("#gallery_block button").text('Приховати фотографії');
        if (thislang == 'ru')
            $("#gallery_block button").text('Спрятать фотографии');
    }
    if (w < 501) {
        for (i = 9; i < slides.length; i++) {
            slides[i].style.display = "block";
        }
        $("#gallery_block button").attr('value', 'Save');
    }
});
