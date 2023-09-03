var conn_status = document.querySelector("p");
// var removeFriend = document.querySelector("#remove-btn");
var btn = document.querySelector("#add-btn");

let check=0;
btn.addEventListener("click", function(){
    if(check==0){
        btn.innerHTML = "Unfollow";
        conn_status.innerHTML = "Friends";
        conn_status.style.color = "green";
        check=1;
    }else{
        btn.innerHTML = "Follow";
        conn_status.innerHTML = "Stanger";
        conn_status.style.color = "red";
        check=0;
    }
})
