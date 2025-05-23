var card = document.querySelector("#card")
var heart = document.querySelector("#heart")

card.addEventListener("dblclick", function(){
    heart.style.transform = "translate(-50%,-50%) scale(1)"
    heart.style.opacity = 0.8
    heart.style.color = "rgb(255, 69, 69)"
    setTimeout(function(){
        heart.style.opacity = 0  

    },800)
    setTimeout(function(){
        heart.style.transform = "translate(-50%,-50%) scale(0)"  

    },1000)

})