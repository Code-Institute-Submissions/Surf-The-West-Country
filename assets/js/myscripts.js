
$('.main-button').mouseenter(function(){
    $(this).addClass('shade');
});

$('.main-button').mouseleave(function(){
    $(this).removeClass('shade');
});

$('#north-button').click(function(){
    $("#north-main").children().addClass("inline-block").slideToggle("slow");
    $("#west-main").children().hide("slow");
    $("#south-main").children().hide("slow");
});

$('#west-button').click(function(){
    $("#west-main").children().addClass("inline-block").slideToggle("slow");
    $("#north-main").children().hide("slow");
    $("#south-main").children().hide("slow");
});

$('#south-button').click(function(){
    $("#south-main").children().addClass("inline-block").slideToggle("slow");
    $("#west-main").children().hide("slow");
    $("#north-main").children().hide("slow");
});


    



