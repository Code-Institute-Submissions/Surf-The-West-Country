
$('.main-button').mouseenter(function(){
    $(this).addClass('shade');
});

$('.main-button').mouseleave(function(){
    $(this).removeClass('shade');
});

$('#north-button').click(function(){
    $(".north-main").slideToggle();
    $(".west-main").hide("slow");
    $(".south-main").hide("slow");
});

$('#west-button').click(function(){
    $(".west-main").slideToggle();
    $(".north-main").hide("slow");
    $(".south-main").hide("slow");
});

$('#south-button').click(function(){
    $(".south-main").slideToggle();
    $(".west-main").hide("slow");
    $(".north-main").hide("slow");
});

$(".col-subs").mouseenter(function (){
    $(this).addClass("shade-white");
    $(".sm-main-button").addClass("shade");
})

$(".col-subs").mouseleave(function (){
    $(this).removeClass("shade-white");
    $(".sm-main-button").removeClass("shade");
})

$('.modal-button').mouseenter(function(){
    $(this).addClass('shade-dark-blue');
});

$('.modal-button').mouseleave(function(){
    $(this).removeClass('shade-dark-blue');
});



document.getElementById("open-modal").addEventListener("click", openModalSub)

function openModalSub(){
    var modal = document.getElementById("modalSub");
    modal.style.display = "block"
}

document.getElementById("close-button").addEventListener("click", closeModalSub)

function closeModalSub(){

    var modalClose = document.getElementById("modalSub");
    modalClose.style.display = "none"
}
    
$(".footer-link, .social-links").mouseenter(function(){
    $(this).addClass('hover-dark');
})

$(".footer-link, .social-links").mouseleave(function(){
    $(this).removeClass('hover-dark');
})

let map; 

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: {
            lat: 50.503632,
            lng: -4.652498
        }
    });

    var fistral = new google.maps.Marker({
        position: {lat: 50.4165, lng: -5.1002},
        zoom: 12,
        map
    });

    var infowindow = new google.maps.InfoWindow({
        content: "<p><b>A.Fistral Beach</b></p>"
    });

    fistral.addListener("click", () =>{
        infowindow.open(map, fistral);
    });
     
    
    var lusty = new google.maps.Marker({
        position: {lat: 50.4218, lng: -5.0642},
        zoom: 12,
        map
    });

    var perran = new google.maps.Marker({
        position: {lat: 50.3444, lng: -5.1544},
        zoom: 12,
        map
    });

}

