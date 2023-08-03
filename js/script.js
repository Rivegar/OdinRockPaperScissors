const myArray = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice()
{
	return(myArray[(Math.floor(Math.random() * myArray.length))]);
}

function playRound(playerSelection, computerSelection)
{
	let myLog = '';
	if(playerSelection === "ROCK")
	{
		if(computerSelection === "PAPER")
		{
			myLog = "You Lose! Paper beats Rock";
		}
		else if(computerSelection === "SCISSORS")
		{
			myLog = "You Won! Rock beat Scissors";
		}
		else if (playerSelection === computerSelection)
		{
			myLog = "It's a tie!"
		}
	}
	else if(playerSelection === "PAPER")
	{
		if(computerSelection === "SCISSORS")
		{
			myLog = "You Lose! Scissors beat Paper";
		}
		else if(computerSelection === "ROCK")
		{
			myLog = "You Won! Paper beats Rock";
		}
		else if (playerSelection === computerSelection)
		{
			myLog = "It's a tie!"
		}

	}
	else if(playerSelection === "SCISSORS")
	{
		if(computerSelection === "ROCK")
		{
			myLog = "You Lose! Rock beats Scissors";
		}
		else if(computerSelection === "PAPER")
		{
			myLog = "You Won! Scissors beat Paper"
		}
		else if(playerSelection === computerSelection)
		{
			myLog = "It's a tie!"
		}
	}
	return myLog;
}

function game()
{
	let playerWins = 0;
	let computerWins = 0;
	for (let i = 0; i < 5; i++) {
		const playerSelection = prompt().toUpperCase();
		const computerSelection = getComputerChoice();
		const result = playRound(playerSelection, computerSelection);
		console.log(result);

		if(result.includes("You Won"))
		{
			playerWins++;
		}
		if(result.includes("You Lose"))
		{
			computerWins++;
		}
	}
	if (playerWins > computerWins)
	{
		return("The player Wins!")
	}
	else if (computerWins > playerWins)
	{
		return("The computer Wins!")
	}
	else
	{
		return("It's a tie, no one wins!")
	}
}

console.log(game());
