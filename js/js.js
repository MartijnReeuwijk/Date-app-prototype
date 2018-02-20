function clickHover() {
    var overlay = document.querySelector(".overlay");
    overlay.classList.add("hoverActive");
}

// function removeHover() {
//     var overlay = document.querySelector(".hoverActive");
//     overlay.classList.remove("hoverActive");
// }

document.querySelector(".activeCat").addEventListener("click", clickHover);
// document.querySelector(".hoverActive").addEventListener("click", removeHover);
