
const icon = document.getElementById("icon");
const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("nav");

menuIcon.addEventListener("click", ()=>{
  navbar.classList.toggle("nav-toggle");
  if ( navbar.classList.contains("nav-toggle")){
    icon.src = "./images/icon-close.svg";
  }else{
    icon.src = "./images/icon-hamburger.svg";
  }
});
