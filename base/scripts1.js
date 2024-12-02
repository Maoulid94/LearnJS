// Selecteurs
// document.querySelector("h4").style.background = "red";
// const balise_p = document.querySelector("h4");

// Click event
const question_container = document.querySelector(".click_event");
const btn1 = document.querySelector("#btn_1");
const btn2 = document.querySelector("#btn_2");
const btn3 = document.querySelector("#btn_3");
const buttons = [btn2, btn3];
const answer = document.querySelector("p");
console.log(btn1, btn2, btn3);
question_container.addEventListener("click", () => {
  question_container.classList.toggle("questions_clicked");
});
btn1.addEventListener("click", () => {
  answer.classList.add("show_answer");
  answer.style.backgroundColor = "green";
});
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    answer.classList.add("show_answer");
    answer.style.backgroundColor = "red";
  });
});
{
  /*order of CSS id > class > balise */
}

// Mouse_event
const mouse = document.querySelector(".mouse_event");
window.addEventListener("mousemove", (e) => {
  mouse.style.left = e.pageX + "px";
  mouse.style.top = e.pageY + "px";
});
window.addEventListener("mousedown", () => {
  mouse.style.transform = "scale(2) translate(-25%,-25%)";
});
window.addEventListener("mouseup", () => {
  mouse.style.transform = "scale(1) translate(-50%,-50%)";
  mouse.style.border = "2px solid orangered";
});
question_container.addEventListener("mouseenter", () => {
  question_container.style.background = "rgba(0,0,0,0.6)";
});
question_container.addEventListener("mouseout", () => {
  question_container.style.background = "orangered";
});
answer.addEventListener("mouseover", () => {
  answer.style.transform = "rotate(2deg)";
});

// Key-Event
const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
};
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
  if (e.key === "k") {
    keypressContainer.style.backgroundColor = "blue";
  } else if (e.key === "m") {
    keypressContainer.style.backgroundColor = "orangered";
  } else {
    keypressContainer.style.backgroundColor = "teal";
  }
  ring(e.key);
});

// scroll Event
const nav_btn = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 130) {
    nav_btn.style.top = 0;
  } else {
    nav_btn.style.top = "-50px";
  }
});
