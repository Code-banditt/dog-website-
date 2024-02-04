const headerCONT = document.querySelector(".navigation-page ");
const navigators = document.querySelector(".nav-icons");
const navigation = document.querySelector(".navigation-links");
const mainpage = document.querySelector(".Hero-page");
const stickyHeader = document.querySelector(".sticky-main");
//modal contents
const modalContainer = document.querySelector(".modal-container");
const closeModal = document.querySelector(".close-modal");
const openModal = document.querySelector(".store-link");
//slider props
const petSlide = document.querySelector(".woof-slider ");
const navDots = document.querySelector(".navigation-dots");
const left = document.querySelector("#left-one");
const right = document.querySelector("#right-one");

//
//script toggle nav

navigators.addEventListener("click", function () {
  headerCONT.classList.toggle("nav-open");
});

//add modal
openModal.addEventListener("click", function (e) {
  e.preventDefault();
  modalContainer.classList.add("something");
});

closeModal.addEventListener("click", function (e) {
  e.preventDefault();
  modalContainer.classList.remove("something");
});

//sticky navigator

const stickyFunction = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (entry.isIntersecting) return stickyHeader.classList.add("nun");
  else stickyHeader.classList.remove("nun");
};

const ObserveSticky = new IntersectionObserver(stickyFunction, {
  root: null,
  threshold: 0.15,
});

ObserveSticky.observe(mainpage);

//carousel component script
