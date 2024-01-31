const headerCONT = document.querySelector(".navigation-page");
const navigators = document.querySelector(".nav-icons");
const navigation = document.querySelector(".navigation-links");

//modal contents
const modalContainer = document.querySelector(".modal-container");
const closeModal = document.querySelector(".close-modal");
const openModal = document.querySelector(".store-link");
//script toggle nav

navigators.addEventListener("click", function () {
  headerCONT.classList.toggle("nav-open");
});

openModal.addEventListener("click", function (e) {
  e.preventDefault();
  modalContainer.classList.add("something");
});

closeModal.addEventListener("click", function (e) {
  e.preventDefault();
  modalContainer.classList.remove("something");
});
