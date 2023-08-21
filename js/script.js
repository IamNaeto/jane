/**
 * active header when window scroll down to 100px
 **/

const header = document.querySelector("header");
const headerContainer = document.querySelector(".header-container");
const boxShadowValue = "0 0 20px hsla(216, 14%, 14%, 0.05)"
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.style.backgroundColor = "#fff";
    header.style.paddingTop = "5px";
    header.style.paddingBottom = "5px";
    header.style.boxShadow = boxShadowValue;
    headerContainer.style.boxShadow = ""
  } else {
    header.style.backgroundColor = "#f6f7f9";
    header.style.paddingTop = "15px";
    header.style.paddingBottom = "15px";
    header.style.boxShadow = ""
    headerContainer.style.boxShadow = boxShadowValue;
  }
});