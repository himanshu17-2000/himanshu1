function burr() {
    var pic;
    pic = document.getElementById("img-2");
    pic.style.filter = "blur(10px) grayscale(100%)";
    pic.style.transition = "all 0.8s"

}
function no_burr() {
    var pic;
    pic = document.getElementById("img-2");
    pic.style.filter = "blur(0px)";

}
