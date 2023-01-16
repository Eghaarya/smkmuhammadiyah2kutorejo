// slider responsible
var tenaga_pendidik_slider = 1
var osis_slider = 1
var galeri_foto_slider = 1
var galeri_video_slider = 1


if(window.innerWidth >= 1350){
    tenaga_pendidik_slider = 3
    osis_slider = 2
    galeri_foto_slider = 3
    galeri_video_slider = 3
}
else if(window.innerWidth >= 700){
    tenaga_pendidik_slider = 2
    osis_slider = 2
    galeri_foto_slider = 2
    galeri_video_slider = 2
}

if(window.innerWidth <= 900){
    function removeNode(){
        const myDiv = document.getElementById("a-hapus")
        const parent = myDiv.parentNode;
        parent.removeChild(myDiv)
    }
    removeNode()
    removeNode()     
}


// popup
function telp(){
    alert("Silahkan Contact : 0852-3202-3939")
}
function alamat(){
    alert("Alamat : Jl. Mayjen H.Soemadi No. 88 Kutorejo")
}

    
// slider
$(document).ready(function(){

    $("#slider-hero").owlCarousel({
        loop: true,
        nav:true,
        items:1,
        dots:false,
        margin:0,
        navText:[
            "<i class='fas fa-angle-left'  aria-hidden='true'><i>",
            "<i class='fas fa-angle-right'  aria-hidden='true'><i>",
        ],
        navContainer: "#slider-hero-nav",
    });
    $("#tenaga-pendidik-slider").owlCarousel({
        loop: true,
        nav:true,
        items:tenaga_pendidik_slider,
        dots:false,
        margin:20,
        navText:[
            "<i class='fas fa-angle-left'  aria-hidden='true'><i>",
            "<i class='fas fa-angle-right'  aria-hidden='true'><i>",
        ],
        navContainer: "#slider-tools-1",
    });
    $("#osis-slider").owlCarousel({
        loop: true,
        nav:true,
        items:osis_slider,
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
        items:galeri_foto_slider,
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
        items:galeri_video_slider,
        dots:false,
        margin:20,
        navText:[
            "<i class='fas fa-angle-left' aria-hidden='true'><i>",
            "<i class='fas fa-angle-right' aria-hidden='true'><i>",
        ],
        navContainer: "#slider-tools-4",
    });
});
if(window.innerWidth <= 900){
    function tombol(){
        const btn = document.getElementById("slider-hero-nav")
        const btn1 = document.getElementById("slider-tools-1")
        const btn2 = document.getElementById("slider-tools-2")
        const btn3 = document.getElementById("slider-tools-3")
        const btn4 = document.getElementById("slider-tools-4")
        btn.remove()
        btn1.remove()
        btn2.remove()
        btn3.remove()
        btn4.remove()
    }
    tombol()    
}
