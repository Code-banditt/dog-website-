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
const sliderContainer = document.querySelector(".carousels");
const navDots = document.querySelector(".navigation-dots");
const left = document.querySelector("#left-one");
const right = document.querySelector("#right-one");

////pet page
const petdisplay = document.querySelector(".advert-pets");

/////////////////////
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

let currentIndex = 0;
let maxSlide = sliderContainer.children.length;

function showsliders(index) {
  const offset = -index * 100 + "%";
  sliderContainer.style.transform = "translateX(" + offset + ")";
}

setInterval(function nexslide() {
  currentIndex = (currentIndex + 1) % sliderContainer.children.length;
  showsliders(currentIndex);
  if (currentIndex === sliderContainer.children.length - 1) {
    setTimeout(() => {
      currentIndex = 0;
      showsliders(currentIndex);
    }, 6000);
  }
}, 6000);

function nexslide() {
  currentIndex = (currentIndex + 1) % sliderContainer.children.length;
  showsliders(currentIndex);
  if (currentIndex === sliderContainer.children.length - 1) {
    setTimeout(() => {
      currentIndex = 0;
      showsliders(currentIndex);
    });
  }
}

function prevslide() {
  currentIndex =
    (currentIndex - 1 + sliderContainer.children.length) %
    sliderContainer.children.length;
  showsliders(currentIndex);
}

left.addEventListener("click", prevslide);
right.addEventListener("click", nexslide);

//pet section
