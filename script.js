const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")
const audio = new Audio("sound/click.wav")
const winner = new Audio("sound/winner.wav")
audio.play()
const imgDice = document.querySelector(".dice");
document.querySelector(".dice").style.display = "none";

let current = 0;
let activePlayer = 0;
let score = [0, 0];
let gameOver = true;

const activeFunc = function () {
  current = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = current;
  activePlayer = activePlayer == 0 ? 1 : 0;
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
};

btnRoll.addEventListener("click", () => {
  if (gameOver) {
    imgDice.style.display = "block";
    let random = Math.ceil(Math.random() * 6);
    imgDice.src = `dice-${random}.png`;
    audio.play()

    if (random !== 1) {
      current += random;
      document.querySelector(`#current--${activePlayer}`).textContent = current;
    } else {
      activeFunc();
    }
  }
});

btnHold.addEventListener("click", () => {
  score[activePlayer] += current;
  if (gameOver) {
    audio.play()
    if (score[activePlayer] < 100) {
      document.querySelector(`#score--${activePlayer}`).textContent =
        score[activePlayer];
      activeFunc();
    } else {
      winner.play()
      document.querySelector(`#score--${activePlayer}`).textContent =
        score[activePlayer];
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document.querySelector(`#name--${activePlayer}`).textContent = "Winner";
      imgDice.style.display = "none";
      gameOver = false;
    }
  }
});


btnNew.addEventListener("click" , ()=> {
 location.reload(true)
})