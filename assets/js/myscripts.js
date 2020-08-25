$('.main-button').mouseenter(function(){
    $(this).addClass('shade');
});

$('.main-button').mouseleave(function(){
    $(this).removeClass('shade');
});

$('#north-button').click(function(){
    $("#north-main").slideToggle("slow");
    
    if($("#west-button") || $("#south-button") == 'open'){
        $("north-main").hide();
    }
});

$('#west-button').click(function(){
    $("#west-main").slideToggle("slow");
});


/*function toggleMainNorth(){

    var toggle = document.getElementById("north-main");
    if (toggle.style.display === "none"){
        toggle.style.display = "inline-block";
    } else{
        toggle.style.display = "none";
    }
   
}

function toggleMainWest(){
    
    var toggle = document.getElementById("west-main");
        
    if (toggle.style.display === "none"){
        toggle.style.display = "inline-block";
    } else{
        toggle.style.display = "none";
    }
}

function toggleMainSouth(){
    
    var toggle = document.getElementById("south-main");
        
    if (toggle.style.display === "none"){
        toggle.style.display = "inline-block";
    } else{
        toggle.style.display = "none";
    }
}*/