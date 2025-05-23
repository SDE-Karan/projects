var statusFriend = document.querySelector("h3")
var addFriend = document.querySelector("#add")
var friend = false

addFriend.addEventListener("click", function(){
    if(friend==false){
        statusFriend.innerHTML = "Friends"
        addFriend.innerHTML = "Remove"
        addFriend.style.color = "black"
        addFriend.style.backgroundColor = "#ffff"
        addFriend.style.border = "1px solid black"
        friend = true
    }else{
        statusFriend.innerHTML = "Stranger"
        addFriend.innerHTML = "Add Friend"
        addFriend.style.color = "white"
        addFriend.style.backgroundColor = "black"
        friend = false

    }
    
    
})