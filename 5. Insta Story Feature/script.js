var arr = [
    {
    dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: ""
}, 
{
    dp: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:""
},
{
    dp: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:""
},
{
    dp: "https://plus.unsplash.com/premium_photo-1661775820832-f971657b13f6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:""
},
{
    dp: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:""
},
]


var clutter = ""

arr.forEach(function(elem, idx){
    clutter+= `<div class="story">
    <img id = "${idx}"src="${elem.dp}" alt="">
</div>`
})
var stories = document.querySelector("#stories")

stories.innerHTML = clutter

stories.addEventListener("click", function(dets){
    let fullscreen = document.querySelector("#full-screen");
    fullscreen.style.backgroundImage = `url(${arr[dets.target.id].dp})`;
    fullscreen.classList.add("active");

    setTimeout(function(){
        fullscreen.classList.remove("active");
    }, 3000);
});