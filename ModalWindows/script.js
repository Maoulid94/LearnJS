"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal_btn = document.querySelector(".close-modal");
const showModal_btn = document.querySelectorAll(".show-modal");
// fuction close modal
const close = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < showModal_btn.length; i++)
  showModal_btn[i].addEventListener("click", () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
closeModal_btn.addEventListener("click", close);
overlay.addEventListener("click", close);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    close();
  }
});
