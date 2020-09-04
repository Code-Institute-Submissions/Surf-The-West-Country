
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
    

