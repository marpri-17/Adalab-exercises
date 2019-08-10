"use strict";
const exercise1 = document.querySelector(".js-link");
const exerciseInfo = document.querySelector('.js-hidden');
const icon = document.querySelector ('.js-icon');

const goExercise1 = function() {
  window.location.href = "emoji-mood.html";
};

const toggleInfo = () => exerciseInfo.classList.toggle('hidden');

const changeIconDown =()=>{
  icon.removeChild(icon.childNodes[1]);
  const newArrowIcon = document.createElement('i');
  newArrowIcon.classList.add('fas','fa-arrow-circle-down', 'exercise__icon')
  icon.appendChild(newArrowIcon);
}
const changeIconUp =()=>{
  icon.removeChild(icon.childNodes[1]);
  const newArrowIcon = document.createElement('i');
  newArrowIcon.classList.add('fas','fa-arrow-circle-up', 'exercise__icon')
  icon.appendChild(newArrowIcon);
}
const handlerHover = () =>{
  toggleInfo();
  changeIconDown();
}
const handlerHoverOut = () =>{
  toggleInfo();
  changeIconUp();
}
exercise1.addEventListener("click", goExercise1);
exercise1.addEventListener('mouseover', handlerHover);
exercise1.addEventListener('mouseout', handlerHoverOut);