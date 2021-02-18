'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const header = document.querySelector(".header");
const message = document.createElement("div");
///////////////////////////////////////
// Modal window
const openModal = function (event) {
  event.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button Scrolling
btnScrollTo.addEventListener("click", function(event) {
  section1.scrollIntoView({behavior: "smooth"})
});


message.classList.add("cookie-message");
message.innerHTML = "We use cookied for improved functionality and analytics. <button class ='btn btn--close-cookie' > Got it! </button>"
header.append(message);

document
  .querySelector(".btn--close-cookie") 
  .addEventListener("click", function() {
    message.parentElement.removeChild(message)
  })

message.style.backgroundColor = "#37383d";
message.style.width ="120%"; 
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 +'px';

// Page Navigation

document.querySelector(".nav__links").addEventListener("click", function(e){
  e.preventDefault();
  if(e.target.classList.contains("nav__link")){
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({behavior: "smooth"});
  }
})

// Tabbed Component

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelectorAll(".operations_tab-container");
const tabsContent = document.querySelectorAll(".operations_content")



