const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introscreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introscreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //play match

  const playmatch = () => {
    //select all the options from the button
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const compHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    //ends animation
    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    //computer options
    const compOptions = ["rock", "paper", "scissor"];
    options.forEach((option) => {
      option.addEventListener("click", function () {
        //computer choice
        const compNum = Math.floor(Math.random() * 3);
        const compChoice = compOptions[compNum];
        console.log(compChoice);
        
        setTimeout(() => {
          compare(this.textContent, compChoice);
          //update images
          playerHand.src = `./assets/${this.textContent}.png`;
          compHand.src = `./assets/${compChoice}.png`;
          
        }, 2000);

        playerHand.style.animation = "shakePlayer 2s ease";
        compHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const compScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    compScore.textContent = cScore;
  };

  const compare = (playerChoice, compChoice) => {
    const winner = document.querySelector(".winner");

    if (playerChoice === compChoice) {
      winner.textContent = "Tie";
      return;
    }
    if (playerChoice === "rock") {
      if (compChoice === "scissor") {
        winner.textContent = "Player WINS!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer WINS!";
        cScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "paper") {
      if (compChoice === "rock") {
        winner.textContent = "Player WINS!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer WINS!";
        cScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "scissor") {
      if (compChoice === "paper") {
        winner.textContent = "Player WINS!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer WINS!";
        cScore++;
        updateScore();
        return;
      }
    }
  };

  //to call all the inner function
  startGame();
  playmatch();
};

game();
