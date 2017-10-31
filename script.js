/* Stick element */
$(".ontop").hide();
$(window).scroll(function () {
    if ($(window).scrollTop() > 600) {//if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
        $(".ontop").show(200);
    }
    if ($(window).scrollTop() < 600) {
        $(".ontop").hide(); //reached the desired point -- show div
    }
});
$('.ontop').click(function(){
    $('html, body').animate({scrollTop: 0}, 'slow');
});
$('a.topnav').click(function(){
    $('html, body').animate({scrollTop: 0}, 'slow');
});
// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
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
var slides = document.getElementsByClassName("gall-row");
$(document).ready(function() {
    var w = $("body").innerWidth();
    if ((w > 500) && (w < 768)) {
        var slides = document.getElementsByClassName("gall-row");
        for (i = 9; i < slides.length; i++) {
            slides[i].style.display = "none";//Erase all rest images
        }
        //var nav = document.getElementById('menu'), body = document.body;
        $('#gallery_block button').style.display = "block";
    }
    if (w < 501) {
        for (i = 1; i < slides.length; i++) {
            slides[i].style.display = "none";//Erase all rest images
        }
        $('#gallery_block button').style.display = "block";
    }
});
$('#gallery_block button').click(function() {
    var slides = document.getElementsByClassName("gall-row");
    var w = $("body").innerWidth();
    if ((w > 500) && (w < 768)) {
        for (i = 9; i < slides.length; i++) {
            slides[i].style.display = "block";//Erase all rest images
        }
    }
    if (w < 501) {
        for (i = 9; i < slides.length; i++) {
            slides[i].style.display = "block";//Erase all rest images
        }
    }
});

/*$('.gall-row img').click(function(){
    var windowWidth = $(window).width();
});*/