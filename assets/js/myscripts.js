
$('.main-button').mouseenter(function(){
    $(this).addClass('shade');
});

$('.main-button').mouseleave(function(){
    $(this).removeClass('shade');
});

/*------------------ MAIN HERO BUTTONS ---------------- */

$('#britanny-button').click(function(){
    $(".britanny-main").slideToggle();
    $(".lumiere-main").hide("slow");
    $(".argent-main").hide("slow");
    $(".landes-main").hide("slow");
});

$('#lumiere-button').click(function(){
    $(".lumiere-main").slideToggle();
    $(".britanny-main").hide("slow");
    $(".argent-main").hide("slow");
    $(".landes-main").hide("slow");
});

$('#argent-button').click(function(){
    $(".argent-main").slideToggle();
    $(".lumiere-main").hide("slow");
    $(".britanny-main").hide("slow");
    $(".landes-main").hide("slow");
});

$('#landes-button').click(function(){
    $(".landes-main").slideToggle();
    $(".lumiere-main").hide("slow");
    $(".britanny-main").hide("slow");
    $(".argent-main").hide("slow");
});

/*-----------------------------------------*/

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

function initMap(){

    var locations = [
        ["1. Plage Des Blanc-Sablons", 48.3693, -4.7645, 1],
        ["2. Fort-Bloqué, Guidel", 47.7344, -3.50439, 2]
        ["3. Sainte-Barbe, Pouharnel", 47.5983, -3.1524, 3],
        ["4. Les Dunes, Vendee", 46.56, -1.84, 4],
        ["5. Les Conches, Vendee", 46.3866, -1.4689, 1],
        ["6. Lacanau, Gironde", 44.995218, -1.202660, 2],
        ["7. Carcans, Gironde",],
        ["8. L'Estacade, Capbetron",],
        ["9. Ondres Plage, Ondres",],
        ["10. La Grande Plage, Biarritz",],
        ["11. La Cote des Basques, Biarritz",],
        ["12. Plade d'Hendaye",]
    ];

    var map = new google.maps.Map(document.getElementById("hero-map"), {
        zoom: 6,
        center: new google.maps.LatLng(46.2276, 0.5792)
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++){
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i){
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));

    }

}

/*------------------------------------------------------*/

$("#addSurfSpotButton").click(function(){
    $(".add-row").slideToggle("slow");
})

$("#spotName, #spotLocation, #break").addClass("inputSize")

$("#fistralB").click(function(){
    $("#hdF").slideToggle("slow");
})

$("#lustyb").click(function(){
    $("#hdL").slideToggle("slow");
})

$("#perranpor").click(function(){
    $("#hdP").slideToggle("slow");
    $("#hdL").stop();
})


/*document.getElementById(nameId).addEventListener(click, hideD());

function hideD(nameId, classId){

    var beachDescription = document.getElementById(classId);

    if (beachDescripition.style.display == "none"){
        beachDescription.style.display = "inline-block"
    }
}

hideD(fistralB, hdF)*/

/*$(".tooltip").mouseenter(function(){
    $(".toolTipText").css("visibility", "visible");
})

$(".tooltip").mouseleave(function(){
    $(".toolTipText").css("visibility", "hidden");
})*/


