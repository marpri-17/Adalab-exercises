"use strict";
const exercises = document.querySelectorAll(".js-link");
const exerciseInfo = document.querySelectorAll('.js-hidden');
const icons = document.querySelectorAll('.js-icon');


const toggleInfo = (item) => {
  let selectInfo = item.children;
  let selectText = selectInfo[0];
  console.log (selectText);
  let infoText = selectText.childNodes;
  infoText[3].classList.toggle('hidden');
}
const pickedItem = (ev)=>{
  return ev.currentTarget;
}

const changeIconDown =(item)=>{
  let info = item.childNodes[1]
  let icon = info.childNodes[1] ;
  icon.removeChild(icon.childNodes[1]);
  const newArrowIcon = document.createElement('i');
  newArrowIcon.classList.add('fas','fa-arrow-circle-down', 'exercise__icon')
  icon.appendChild(newArrowIcon);
}
const changeIconUp =(item)=>{
  let info = item.childNodes[1]
  let icon = info.childNodes[1]
  icon.removeChild(icon.childNodes[1]);
  const newArrowIcon = document.createElement('i');
  newArrowIcon.classList.add('fas','fa-arrow-circle-up', 'exercise__icon')
  icon.appendChild(newArrowIcon);
}
const handlerHover = (event) =>{
  toggleInfo(pickedItem(event));
  changeIconDown(pickedItem(event));
}
const handlerHoverOut = (event) =>{
  toggleInfo(pickedItem(event));
  changeIconUp(pickedItem(event));
}

debugger;
const addExerciseListener =()=>{
  for (let item of exercises){
    item.addEventListener('mouseover', handlerHover);
    item.addEventListener('mouseout', handlerHoverOut);
  }
}
addExerciseListener();