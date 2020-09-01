
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

/*function toggleNorth (){

    var toggleNorth = document.getElementById("north-main");
    var closeWest = document.getElementById("west-main");
    var closeSouth = document.getElementById("south-main");

    if (toggleNorth.style.display == "none"){
        $("#north-button").click(function(){
            $("#north-main").slideToggle("slow");
        })
    } else{
        toggleNorth.style.display = "none"
    }
}*/

document.getElementById("open-modal").addEventListener("click", openModalSub)

function openModalSub(){
    
    var modal = document.getElementById("modalSub");

    if(modal.style.display == "none"){
        modal.style.display = "block"
    }else{
        modal.style.display = "none";
    }
}


//$('#open-modal').click(function(){
    //$("#modalSub").show();
//});


    

    


  



    



