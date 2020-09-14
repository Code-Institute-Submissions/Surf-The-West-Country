
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

/*-------------- NORTH MAIN BUTTON CONTENT ----------------*/
 

function initMap() {
    let mapOne = new google.maps.Map(document.getElementById("map-north"), {
        zoom: 8,
        center: {
            lat: 50.503632,
            lng: -4.652498
        }
    });

    /*------ FISTRAL BEACH -------*/

    var fistral = new google.maps.Marker({
        position: {lat: 50.4165, lng: -5.1002},
        zoom: 12,
        mapOne
    });

    var infowindow = new google.maps.InfoWindow({
        content: "<p><b>A.Fistral Beach</b></p>"
    });

    fistral.addListener("click", () =>{
        infowindow.open(mapOne, fistral);
    });
     
    /*------ LUSTY BEACH -------*/

    var lusty = new google.maps.Marker({
        position: {lat: 50.4218, lng: -5.0642},
        zoom: 12,
        mapOne
    });

    var infowindow2 = new google.maps.InfoWindow({
        content: "<p><b>B.Lusty Glaze</b></p>"
    });

    lusty.addListener("click", () =>{
        infowindow2.open(mapOne, lusty);
    });

    /*------ PERRAN BEACH -------*/

    var perran = new google.maps.Marker({
        position: {lat: 50.3444, lng: -5.1544},
        zoom: 12,
        mapOne
    });

    var infowindow3 = new google.maps.InfoWindow({
        content: "<p><b>C.Perranporth Beach</b></p>"
    });

    perran.addListener("click", () =>{
        infowindow3.open(mapOne, perran);
    });

    /*------ WIDEMOUTH BEACH -------*/

    var widemouth = new google.maps.Marker({
        position: {lat: 50.7899, lng: -4.5545},
        zoom: 12,
        map
    });

    var infowindow4 = new google.maps.InfoWindow({
        content: "<p><b>D.Widemouth Beach</b></p>"
    });

    widemouth.addListener("click", () =>{
        infowindow4.open(map, widemouth);
    });
}




function initMap() {
    let mapTwo = new google.maps.Map(document.getElementById("map-west"), {
        zoom: 8,
        center: {
            lat: 50.503632,
            lng: -4.652498
        }
    });

    /*------ SENNEN BEACH -------*/

    var sennen = new google.maps.Marker({
        position: {lat: 50.0720, lng: -5.6947},
        zoom: 12,
        mapTwo
    });

    var infowindow5 = new google.maps.InfoWindow({
        content: "<p><b>A.Sennen Cove</b></p>"
    });

    sennen.addListener("click", () =>{
        infowindow5.open(mapTwo, sennen);
    });
     
}
