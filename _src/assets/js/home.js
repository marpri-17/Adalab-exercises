"use strict";
/* const exercise1 = document.querySelector(".js-link");

const goExercise1 = function(ev) {
  window.location.href = "emoji-mood.html";
};

exercise1.addEventListener("click", goExercise1); */

//Collapsable
const colIcon = document.querySelectorAll(".exercise__name");
const collapsible = document.querySelectorAll(".collapsible--trigger");

const updateCollapsible = ev => {
  ev.stopPropagation();
  const currentCollapsible = ev.currentTarget.childNodes[3];
  currentCollapsible.classList.toggle("collapsible--content-open");
};
for (const item of collapsible) {
  item.addEventListener("click", updateCollapsible);
}
debugger;
