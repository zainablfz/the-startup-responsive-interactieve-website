document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const closeModalBtn = document.querySelector(".btn-close");

  const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  closeModalBtn.addEventListener("click", closeModal);

   overlay.addEventListener("click", closeModal);

  const openModalBtns = document.querySelectorAll(".btn-open");
  openModalBtns.forEach(function (btn) {
    btn.addEventListener("click", openModal);
  });
});

























// document.addEventListener('DOMContentLoaded', function () {
//   const modal = document.querySelector(".modal");
//   const overlay = document.querySelector(".overlay");
//   const openModalBtn = document.querySelector(".btn-open");
//   const closeModalBtn = document.querySelector(".btn-close");

//   const openModal = function () {
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
//   };

//   openModalBtn.addEventListener("click", openModal);

//   const closeModal = function () {
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
//   };

//   closeModalBtn.addEventListener("click", closeModal);
// });




// document.addEventListener('DOMContentLoaded', function () {
// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const openModalBtn = document.querySelector(".btn-open");
// const closeModalBtn = document.querySelector(".btn-close");


// openModalBtn.addEventListener("click", openModal);
// const openModal = function () {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
//   console.log(pls)
// };

// closeModalBtn.addEventListener("click", closeModal);
// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };
// });





// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const openModalBtn = document.querySelector(".btn-open");
// const closeModalBtn = document.querySelector(".btn-close");


// openModalBtn.addEventListener("click", openModal);
// const openModal = function () {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// closeModalBtn.addEventListener("click", closeModal);
// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };