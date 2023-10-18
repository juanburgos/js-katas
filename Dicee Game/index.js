function playGame() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var newDie1 = "./images/dice" + randomNumber1 + ".png";

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var newDie2 = "./images/dice" + randomNumber2 + ".png";

  document.querySelector(".img1").setAttribute("src", newDie1);
  document.querySelector(".img2").setAttribute("src", newDie2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
  } else {
    document.querySelector("h1").textContent = "It's a draw!";
  }
  document.querySelector("button").innerText = "Play again!";
}
