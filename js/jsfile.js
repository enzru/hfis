window.onload = function() {
    var oDiv = document.getElementById("sliderPage");
    var oUl = document.getElementById("sliderUl");
    var timer = null;
    var iSpeed = -2;
    oUl.style.width = 4478 + "px";

    function fnMove() {
        if (oUl.offsetLeft < -oUl.offsetWidth / 2) {
            oUl.style.left = 0;
        }
        oUl.style.left = oUl.offsetLeft + iSpeed + "px";
    }
    timer = setInterval(fnMove, 30)
    oDiv.onmouseover = function() {
        clearInterval(timer);
    }
    oDiv.onmouseout = function() {
        timer = setInterval(fnMove, 30);
    }
}