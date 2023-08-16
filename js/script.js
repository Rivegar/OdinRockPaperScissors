const myArray = ["Saber", "Archer", "Lancer"];

let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;
let gamePlayContainer = document.querySelector(".gamePlayContainer");
gamePlayContainer.style.display = "none";
let totalScore = document.getElementById("score");
let winnerMessage = document.getElementById("winnerMessage");
winnerMessage.textContent = "One wish. One war. Will you be claiming the Holy Grail for yourself... Or are you going to be another step for someone's wish?"
document.addEventListener("DOMContentLoaded", function () {
	letterAnimation();
});
let animatedMessage = winnerMessage.textContent;
let roundResult = document.getElementById("result");
let i = 0;

let rock = document.getElementById("rock");
rock.addEventListener("click", function (e) {
	playerSelection = "Saber";
	computerSelection = getComputerChoice();
	playRound(playerSelection, computerSelection);
});

let paper = document.getElementById("paper");
paper.addEventListener("click", function (e) {
	playerSelection = "Archer";
	computerSelection = getComputerChoice();
	playRound(playerSelection, computerSelection);
});

let scissors = document.getElementById("scissors");
scissors.addEventListener("click", function (e) {
	playerSelection = "Lancer";
	computerSelection = getComputerChoice();
	playRound(playerSelection, computerSelection);
});

let reload = document.getElementById("reload");
reload.style.display = "none";
reload.addEventListener("click", function (e) {
	playerScore = 0;
	computerScore = 0;
	totalScore.textContent = "Victories: 0 Defeats: 0";
	gamePlayContainer.style.display = "block";
	reload.style.display = "none";
	winnerMessage.style.display = "none";
	i = 0;
	roundResult.textContent = "";
});

function getComputerChoice() {
	return (myArray[(Math.floor(Math.random() * myArray.length))]);
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		roundResult.textContent = "It's a tie!"
	}
	else if (
		(playerSelection == "Saber" && computerSelection == "Lancer") ||
		(playerSelection == "Archer" && computerSelection == "Saber") ||
		(playerSelection == "Lancer" && computerSelection == "Archer")
	) {
		roundResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
		playerScore++;
	}
	else {
		roundResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
		computerScore++;
	}
	updateScore();
}

function updateScore() {
    totalScore.textContent = 'Victories: ' + playerScore + ' Defeats: ' + computerScore;
    if (playerScore >= 7) {
        winnerMessage.style.display = "block";
        winnerMessage.textContent = "You won. Enjoy a wish drenched in blood.";
        animatedMessage = winnerMessage.textContent;
        gamePlayContainer.style.display = "none";
        letterAnimation();
    } else if (computerScore >= 7) {
        winnerMessage.style.display = "block";
        winnerMessage.textContent = "You lose... no one remembers the fallen.";
        animatedMessage = winnerMessage.textContent;
        gamePlayContainer.style.display = "none";
        letterAnimation();
    }
}


function letterAnimation() {
	winnerMessage.textContent = animatedMessage.slice(0, i + 1);
	i++;

	if (i < animatedMessage.length) {
		setTimeout(letterAnimation, 100);
	}
	else {
		setTimeout(() => {
			reload.style.display = "block";
		}, 1000);
	}
}
