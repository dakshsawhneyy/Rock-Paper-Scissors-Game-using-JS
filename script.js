let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#move");
let userScorePara = document.querySelector("#your-sc")
let compScorePara = document.querySelector("#comp-sc")

let drawGame = () => {
  msg.innerText="Game Is Draw😑, Play Again"
  msg.style.backgroundColor="navy";
  msg.style.width="28rem"
};
let winStatus = (userWin , userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win🎉!! Your ${userChoice} beats🔫 ${compChoice}`;
    msg.style.width="38rem"
    msg.style.backgroundColor="green";
    urScore++
    userScore.innerText=urScore;
    
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose😣!! ${compChoice} beats your ${userChoice}`;
    msg.style.width="38rem"
    msg.style.backgroundColor="red";
    compSc++
  }
};

let playGame = (userChoice) => {
  let compChoice = genCompChoice();
  
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "scissor" ? true : false;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else {
      //paper,rock
      userWin = compChoice === "paper" ? true : false;
    }
    winStatus(userWin,userChoice, compChoice);
  }
};

let genCompChoice = () => {
  let options = ["rock", "paper", "scissor"];
  let rdmIdx = Math.floor(Math.random() * 3);
  return options[rdmIdx];
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
