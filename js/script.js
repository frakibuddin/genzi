const search_field = document.querySelector(".search-field");
const search_frm = document.querySelector(".search-frm");
const search_btn = document.querySelector(".search-btn");
const header = document.querySelector("header");
const seacrch_mobile = document.querySelector(".seacrch-mobile");
const seacrch_mobile_field = document.querySelector(".seacrch-mobile input");
const seacrch_mobile_btn = document.querySelector(".seacrch-mobile button");
const menu = document.querySelector("menu ul");
const close_btn = document.querySelector(".close-btn");
const hero_section = document.querySelector(".hero-section");

search_btn.onclick = () => {
  search_field.classList.toggle("active");
};
seacrch_mobile_btn.onclick = () => {
  seacrch_mobile_field.classList.toggle("active");
  seacrch_mobile.classList.toggle("active");
};

//if menu button click
close_btn.onclick = () => {
  menu.classList.toggle("active");
  if (close_btn.innerText == "X") {
    close_btn.innerHTML = `<div class="menu-btn-line"></div>`;
  } else {
    close_btn.innerHTML = "X";
  }
};

window.onscroll = function () {
  handleScrollAnimation();
  let pos = window.scrollY;

  if (Math.ceil(pos) > 90) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

// onscroll animation
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.1)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

function svgAnim(count) {
  let r_hend = document.querySelector(".rhand");
  let offer_svg_img = document.querySelector(".offer-svg-img");
  if (count == 0) {
    offer_svg_img.style.transform = `rotateY(0deg) translateX(-25px)`;
    r_hend.style.transform = `rotate(-2deg) `;
  } else if (count == 1) {
    offer_svg_img.style.transform = `rotateY(0deg) translateX(-25px)`;
    r_hend.style.transform = `rotate(40deg)`;
  } else if (count == 2) {
    offer_svg_img.style.transform = `rotateY(0deg) translateX(-25px)`;
    r_hend.style.transform = `rotate(70deg)`;
  } else if (count == 3) {
    offer_svg_img.style.transform = `rotateY(190deg) translateX(-50px)`;
    r_hend.style.transform = `rotate(-2deg)`;
  } else if (count == 4) {
    offer_svg_img.style.transform = `rotateY(190deg) translateX(-50px)`;
    r_hend.style.transform = `rotate(40deg)`;
  } else if (count == 5) {
    offer_svg_img.style.transform = `rotateY(190deg) translateX(-50px)`;
    r_hend.style.transform = `rotate(70deg)`;
  }
}

$(document).ready(function () {
  var owl = $("#owl-demo");

  owl.owlCarousel({
    items: 4, //10 items above 1000px browser width
    itemsDesktop: [1000, 3], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 2], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: [500, 1], // itemsMobile disabled - inherit from itemsTablet option
  });

  // Custom Navigation Events
  $(".next").click(function () {
    owl.trigger("owl.next");
  });
  $(".prev").click(function () {
    owl.trigger("owl.prev");
  });
});
