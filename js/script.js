var checkbox=document.getElementById("showMenu"),
navList=document.getElementById("nav__list");

checkbox.addEventListener("change", function() {
    if (this.checked) {
      navList.classList.add("nav__list__show")
    } else {
        navList.classList.remove("nav__list__show")
    }
  });