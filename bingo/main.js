"use strict";
const btnNewBall = document.querySelector(".js-newBall");
const listNumbers = document.querySelector(".js-numbers");
const myNumbers = document.querySelector(".js-myNumbers");
const generatedBalls = document.querySelector(".js-outballs");
// Generar número aleatorio
const getRamdonNumber = () => {
  let ramdonNumber = Math.floor(Math.random() * 100);
  return ramdonNumber;
};
// Generar el cartón para jugar
function newLuckyNumbers() {
  let getMyNumbers = [];
  for (let i = 0; i < 20; i++) {
    const getMyNumber = getRamdonNumber();
    getMyNumbers.push(getMyNumber);
  }
  return getMyNumbers;
}
// Generar el carton del jugador y ejecutar al iniciar
const getMyCard = () => {
  const getMyNumbers = newLuckyNumbers();
  for (let i = 0; i < getMyNumbers.length; i++)
    myNumbers.innerHTML +=
      "<li class='bingo__number-card'>" + getMyNumbers[i] + "</li>";
};

getMyCard();
// Generar número aleatorio btn

function getBall() {
  const newBall = getRamdonNumber();
  return newBall;
}
//Pintar bolas descartadas abajo
function setOutBall(outBall) {
  generatedBalls.innerHTML +=
    "<li class= 'bingo__number-ball'>" + outBall + "</li>";
}
// Handler del evento. Controla el flujo de caja
function setNewBall() {
  let newBingoBall = getBall();
  listNumbers.innerHTML +=
    "<li class= 'bingo__number-ball'>" + newBingoBall + "</li>";
  debugger;
  getCompare(newBingoBall);
  if (listNumbers.childNodes.length > 10) {
    let removeBall = listNumbers.firstChild;
    listNumbers.removeChild(removeBall);
    setOutBall(removeBall.innerHTML);
  }
}

btnNewBall.addEventListener("click", setNewBall);

// Comparación del cartón y la bola
function getCompare(number) {
  for (let i = 0; i < myNumbers.childNodes.length; i++) {
    const mycardNumber = parseInt(myNumbers.childNodes[i].innerHTML);
    if (mycardNumber === number) {
      myNumbers.childNodes[i].classList.add("strike");
      myNumbers.childNodes[i].classList.add("strike");
    }
  }
}
