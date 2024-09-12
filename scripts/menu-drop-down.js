document.addEventListener("DOMContentLoaded", function () {
  const menuDropDown = document.querySelector(".menu-drop-down");
  const navLinks = document.querySelector(".nav-links");

  menuDropDown.addEventListener("click", function () {
    navLinks.classList.toggle("show");
    if (menuDropDown.innerHTML == "Menu ↓") {
      menuDropDown.innerHTML = "Menu ↑";
    } else {
      menuDropDown.innerHTML = "Menu ↓";
    }
  });
});
