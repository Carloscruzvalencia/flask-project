var istoggle = false;

function menuOpen() {
    if (istoggle == false) {
        document.getElementById("sideBar").style.width = "12vw";
        istoggle = true;
    } else {
        document.getElementById("sideBar").style.width = "0";
        istoggle = false;
    }
}
function myFunction(val) {
    document.getElementById("rangeValue").innerHTML = val + "€"; 
}