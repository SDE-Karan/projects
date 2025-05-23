var elem = document.querySelectorAll(".elem")

elem.forEach(function(x){
    x.addEventListener("mouseenter", function(){
        x.childNodes[3].style.opacity = 1
    })
    x.addEventListener("mouseleave", function(){
        x.childNodes[3].style.opacity = 0
    })
    x.addEventListener("mousemove", function(dets){
        x.childNodes[3].style.left = dets.x + "px"
        // x.childNodes[3].style.top = dets.y + "px"
    })
})









// var elem1 = document.querySelector("#elem1")
// var elemImg1 = document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove",function(dets){
//     elemImg1.style.left = dets.x+"px"
//     elemImg1.style.top = dets.y+"px"
// })
// elem1.addEventListener("mouseenter",function(){
//     elemImg1.style.opacity = 1;
// })
// elem1.addEventListener("mouseleave",function(){
//     elemImg1.style.opacity = 0;
// })

// var elem1 = document.querySelector("#elem1")
// var elemImg1 = document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove",function(dets){
//     elemImg1.style.left = dets.x+"px"
//     elemImg1.style.top = dets.y+"px"
// })
// elem1.addEventListener("mouseenter",function(){
//     elemImg1.style.opacity = 1;
// })
// elem1.addEventListener("mouseleave",function(){
//     elemImg1.style.opacity = 0;
// })