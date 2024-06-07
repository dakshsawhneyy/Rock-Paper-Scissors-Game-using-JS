let yourScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

let playGame = (userChoice) => {
  console.log("Choice was made by User:", userChoice);
}








choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
