const rating = document.querySelector(".rating");
const thankYou = document.querySelector(".thank");
const submit = document.getElementsByClassName("btn");
const number = document.querySelectorAll(".number");
const score = document.getElementById("rate");

submit[0].addEventListener("click", function onClick() {
  thankYou.style.display = "flex"
  rating.style.display = "none"
})
number.forEach((rate) => {
  rate.addEventListener("click",() => {
    score.innerHTML = rate.innerHTML
  })
})
