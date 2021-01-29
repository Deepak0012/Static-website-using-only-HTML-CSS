var nav = document.getElementById('navlist');
var logo = document.getElementById('logo');

function toggleNav () {       

    if ( nav.style.display === "" ){
    nav.style.display = "block";
    
    }
    else
    nav.style.display = "";
}
function hide(){
    logo.style.display = "none";
    
}

function windowResizeHandler () {
    if ( screen.width > 650 )
    nav.style.display = "";
}

window.addEventListener("resize", windowResizeHandler);
