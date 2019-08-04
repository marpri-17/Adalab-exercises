"use strict";
//Handler
function updatePage(ev) {
  ev.preventDefault();
  updateFace();
  updateColor();
}
//Face
const updateFace = function() {
  const selectValue = document.querySelector(".js-select").value;
  face.innerHTML = selectValue;
};
//Background
const getRamdonNumber = function() {
  return Math.floor(Math.random() * 100);
};

const isEven = numb => (numb % 2 === 0 ? true : false);

const updateColor = function() {
  const number = getRamdonNumber();
  const isEvenNumber = isEven(number);
  const background = document.querySelector(".container");
  background.classList.remove("correct-yellow", "red-chilean");
  if (isEvenNumber === true) {
    background.classList.add("correct-yellow");
  } else {
    background.classList.add("red-chilean");
  }
};

const face = document.querySelector(".js-face");

const update = document.querySelector(".js-update");

const select = document.querySelector(".js-select");

debugger;
update.addEventListener("click", updatePage);
