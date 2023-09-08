$(document).on("click mousemove", "#root", function(e) {
    var x = e.clientX;
    var y = e.clientY;
    var newPosX = x - 60;
    var newPosY = y - 100;

    $("#mover").css("transform", "translate3d("+newPosX+"px,"+newPosY+"px,1px)");
});

setInterval(() => {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = date.getMonth();
    var date = date.getDate();

    document.getElementById("the-hour").innerHTML = hour;
    document.getElementById("the-minute").innerHTML = minute;
    document.getElementById("the-second").innerHTML = second;
    document.getElementById("month").innerHTML = months[month];
    document.getElementById("date").innerHTML = date;
    document.getElementById("year").innerHTML = year;
}, 10);