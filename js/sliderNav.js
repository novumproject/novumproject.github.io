"use strict"

const managerNav = () => {
  let scrollActual = window.scrollY;
  let scrollAntiguo = scrollActual;

  addEventListener("scroll", () => {
    const HTMList = document.getElementsByTagName("nav")
    const nav = HTMList[0];
    scrollAntiguo = scrollActual;
    scrollActual = window.scrollY;
    console.log(scrollActual)
    if (scrollActual > scrollAntiguo && scrollActual >= 60) {
      nav.style.transform = "translateY(-60px)";
    } else {
      nav.style.transform = "translateY(0px)";
    
    }
  });
};

export default managerNav;