$(document).on("click mousemove", "#root", function(e) {
    var x = e.clientX;
    var y = e.clientY;
    var newPosX = x - 60;
    var newPosY = y - 100;

    $("#mover").css("transform", "translate3d("+newPosX+"px,"+newPosY+"px,1px)");
}); 