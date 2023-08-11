const myArray = ["ROCK", "PAPER", "SCISSORS"];

let playerSelection = "";

let rock = document.getElementById("rock");
rock.addEventListener("click", function(e){
	playerSelection = "ROCK";
	computerSelection = getComputerChoice();
	playRound(playerSelection, computerSelection);
});

let paper = document.getElementById("paper");
paper.addEventListener("click", function(e){
	playerSelection = "PAPER";
	computerSelection = getComputerChoice();
	playRound(playerSelection, computerSelection);
});

let scissors = document.getElementById("scissors");
scissors.addEventListener("click", function(e){
	playerSelection = "SCISSORS";
	computerSelection = getComputerChoice();
	playRound(playerSelection, computerSelection);
});

function getComputerChoice()
{
	return(myArray[(Math.floor(Math.random() * myArray.length))]);
}

function playRound(playerSelection, computerSelection)
{
	let roundResult = document.getElementById("result");
	if(playerSelection === "ROCK")
	{
		if(computerSelection === "PAPER")
		{
			roundResult.textContent = "You Lose! Paper beats Rock";
		}
		else if(computerSelection === "SCISSORS")
		{
			roundResult.textContent = "You Won! Rock beat Scissors";
		}
		else if (playerSelection === computerSelection)
		{
			roundResult.textContent = "It's a tie!"
		}
	}
	else if(playerSelection === "PAPER")
	{
		if(computerSelection === "SCISSORS")
		{
			roundResult.textContent = "You Lose! Scissors beat Paper";
		}
		else if(computerSelection === "ROCK")
		{
			roundResult.textContent = "You Won! Paper beats Rock";
		}
		else if (playerSelection === computerSelection)
		{
			roundResult.textContent = "It's a tie!"
		}

	}
	else if(playerSelection === "SCISSORS")
	{
		if(computerSelection === "ROCK")
		{
			roundResult.textContent = "You Lose! Rock beats Scissors";
		}
		else if(computerSelection === "PAPER")
		{
			roundResult.textContent = "You Won! Scissors beat Paper"
		}
		else if(playerSelection === computerSelection)
		{
			roundResult.textContent = "It's a tie!"
		}
	}
}
