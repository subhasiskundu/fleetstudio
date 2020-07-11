
//===== Carousel

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


//===== Nav Bar

function navClick() {
    var x = document.getElementById("fsMenu");
    if (x.className === "fsnav") {
        x.className += " open";
    } else {
        x.className = "fsnav";
    }

    var y = document.getElementById("fshmbgr");
    if (y.className === "fs-nav-btn") {
        y.className += " open";
    } else {
        y.className = "fs-nav-btn";
    }
}

//===== Sticky

$(window).on('scroll', function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 20) {
        $(".fs-header").removeClass("sticky");
        // $(".navbar-area img").attr("src", "assets/images/logo.svg");
    } else {
        $(".fs-header").addClass("sticky");
        // $(".navbar-area img").attr("src", "assets/images/logo-2.svg");
    }
});


//===== Section Menu Active

var scrollLink = $('.page-scroll');
// Active link switching
$(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {

        var sectionOffset = $(this.hash).offset().top - 73;

        if (sectionOffset <= scrollbarLocation) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
        }
    });
});