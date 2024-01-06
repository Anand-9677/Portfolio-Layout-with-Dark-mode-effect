var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    //If body contains dark theme then icon will change into sun icon else into moon icon.
    if(document.body.classList.contains("dark-theme")){
        icon.src = "sun.png";
    }
    else{
        icon.src = "moon.png";
    }
}