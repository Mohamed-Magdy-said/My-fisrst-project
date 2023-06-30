// active Class
let current_page_name = document.getElementsByClassName(document.title);
current_page_name[0].classList.add("actv")

// header scroll
let header = document.querySelector(".header");
let triangle = document.querySelectorAll(".t1");
window.onscroll = function () {
  if (window.scrollY >= 200) {
    header.classList.add("header-st");
    header.classList.add("animation-down");
    header.style.display = "block";
    triangle[0].style.display = "none";
  } else {
    header.classList.remove("animation-down");
    header.classList.remove("header-st");
    triangle[0].style.display = "block";
  }
  if ( window.scrollY > 400 &&window.scrollY <1100) {
    triangle[1].style.display = "block";
  } 

  else {
    triangle[1].style.display = "none";
  }
  
};


// triangle
window.onload = function () {
  if (window.scrollY >= 200) {

    header.classList.add("header-st");
    header.classList.add("animation-down");

    header.style.display = "block";
    triangle[0].style.display = "none";
  } else {

    header.classList.remove("header-st");
    triangle[0].style.display = "block";
  }
};

// profile image


// display main-item in mobile
// document.querySelector(".main-item").style.height ="fit-content";
let hei ;
document.querySelector(".btn-item").onclick = function () {
  if (document.querySelector(".main-item").style.height == "0px") {
    document.querySelector(".main-item").style.height = "282px";
  } else {
    document.querySelector(".main-item").style.height = "0px";
  }
};
