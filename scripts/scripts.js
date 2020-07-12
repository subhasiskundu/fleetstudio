
//===== Carousel

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("fs-slide");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);
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

//===== Sticky Header

$(window).on('scroll', function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 20) {
        $(".fs-header").removeClass("sticky");
    } else {
        $(".fs-header").addClass("sticky");
    }
});


//===== StickySidebar

$(window).on('scroll', function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
        $(".fs-sidebar").removeClass("stickysidebar");
    } else if (scroll > 840) {
        $(".fs-sidebar").removeClass("stickysidebar");
    } else {
        $(".fs-sidebar").addClass("stickysidebar");
    }
});


//===== Section Menu Active

var scrollLink = $('.page-scroll');
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