
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


/*------------------SUBSCRIBE MODAL ------------------*/

$(".col-subs").click(function(){
    $("#modalSubId").fadeToggle("slow")
});

$(".close-button").click(function(){
    $("#modalSubId").fadeOut("slow");
    $(".add-row").fadeOut("slow");
});


$("#addSurfSpotButton").click(function(){
    $(".add-row").fadeIn("slow");
});




/*-----------------FOOTER LINKS ------*/
    
$(".footer-link, .social-links").mouseenter(function(){
    $(this).addClass('hover-dark');
})

$(".footer-link, .social-links").mouseleave(function(){
    $(this).removeClass('hover-dark');
})

/*-------------- GOOGLE MAP MULTIPLE MARKERS ----------------*/

function initMap(){

    var locations = [
    ["1. Plage Des Blanc-Sablons", 48.3693, -4.7645],
    ["2. Fort-Bloqué, Guidel", 47.7344, -3.50439],
    ["3. Sainte-Barbe, Pouharnel", 47.5983, -3.1524],
    ["4. Les Dunes, Vendee", 46.56, -1.84],
    ["5. Les Conches, Vendee", 46.3866, -1.4689],
    ["6. Lacanau, Gironde", 44.995218, -1.202660],
    ["7. Carcans, Gironde", 45.0826, -1.1869],
    ["8. L'Estacade, Capbetron", 43.6547, -  1.4455],
    ["9. Ondres Plage, Ondres", 43.5792, -1.4875],
    ["10. La Grande Plage, Biarritz", 43.4838, -1.5604],
    ["11. La Côte des Basques, Biarritz", 43.478351, -1.566935],
    ["12. Plade d'Hendaye", 43.3742, -1.7801]
    ];

    var map = new google.maps.Map(document.getElementById("hero-map"), {
        zoom: 6,
        center: new google.maps.LatLng(46.2276, -0.5792)
    });


    for (i = 0; i<locations.length; i++){

        var location = locations[i];
        var position = new google.maps.LatLng(location[1], location[2]);

        var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: location[0]
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i){
            return function() {
                var infowindow = new google.maps.InfoWindow();

                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    };
};

/*----------  https://gist.github.com/simonbingham/2652757 -------------------------------------*/


/*$("#addSurfSpotButton").click(function(){
    $(".add-row").slideToggle("slow");
});*/

$("#spotName, #spotLocation, #break").addClass("inputSize");


/* -------------- MAIN CARDS SLIDE TOGGLING --------- */

$(".toggleMainCard").click(function(){
    $(this).next("div").slideToggle("slow");
})