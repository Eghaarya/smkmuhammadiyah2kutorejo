$(document).ready(function(){


    $("#slider-hero").owlCarousel({
        loop: true,
        nav:true,
        items:1,
        dots:false,
        margin:0,
        navText:[
            "<i class='fas fa-angle-left' aria-hidden='true'><i>",
            "<i class='fas fa-angle-right' aria-hidden='true'><i>",
        ],
        navContainer: "#slider-hero-nav",
    });
    $("#tenaga-pendidik-slider").owlCarousel({
        loop: true,
        nav:true,
        items:3,
        dots:false,
        margin:20,
        navText:[
            "<i class='fas fa-angle-left' aria-hidden='true'><i>",
            "<i class='fas fa-angle-right' aria-hidden='true'><i>",
        ],
        navContainer: "#slider-tools-1",
    });
    $("#osis-slider").owlCarousel({
        loop: true,
        nav:true,
        items:3,
        dots:false,
        margin:20,
        navText:[
            "<i class='fas fa-angle-left' aria-hidden='true'><i>",
            "<i class='fas fa-angle-right' aria-hidden='true'><i>",
        ],
        navContainer: "#slider-tools-2",
    });
    $("#galeri-foto-slider").owlCarousel({
        loop: true,
        nav:true,
        items:3,
        dots:false,
        margin:20,
        navText:[
            "<i class='fas fa-angle-left' aria-hidden='true'><i>",
            "<i class='fas fa-angle-right' aria-hidden='true'><i>",
        ],
        navContainer: "#slider-tools-3",
    });
    $("#galeri-video-slider").owlCarousel({
        loop: true,
        nav:true,
        items:3,
        dots:false,
        margin:20,
        navText:[
            "<i class='fas fa-angle-left' aria-hidden='true'><i>",
            "<i class='fas fa-angle-right' aria-hidden='true'><i>",
        ],
        navContainer: "#slider-tools-4",
    });
});