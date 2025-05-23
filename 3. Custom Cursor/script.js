var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor")

main.addEventListener("mousemove",function(dets){
    var xPosition = dets.x;
    var yPosition = dets.y;

    cursor.style.left = xPosition+"px"
    cursor.style.top = yPosition+"px"
})