let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const compchoices = document.querySelectorAll(".comchoices");
const compimg = document.querySelectorAll(".compimg");

let msg = document.querySelector("#msg");
let player = document.querySelector("#player");
let comp = document.querySelector("#comp");

const computerChoice = () => {
    //rock paper scissor
    let options = ['rock', 'paper', 'scissor'];
    let randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

let rock = document.querySelector("#rock1");
let paper = document.querySelector("#paper1");
let scissor = document.querySelector("#scissor1");
console.log(rock, paper, scissor);


const showSeletimg = (compChoice,rock,paper,scissor) => {
    if(compChoice === "rock")
    {
        console.log(compChoice);
       rock.style.border = "5px solid yellow";
       paper.style.border = "5px solid white";
       scissor.style.border = "5px solid white";

    }
    else if(compChoice === "paper")
    {
        console.log(compChoice);
        paper.style.border = "5px solid yellow";
        rock.style.border = "5px solid white";
       scissor.style.border = "5px solid white";
    }
    else if(compChoice === "scissor")
    {
        console.log(compChoice);
        scissor.style.border = "5px solid yellow";
        paper.style.border = "5px solid white";
       rock.style.border = "5px solid white";
    }
}

const drawGame = () => 
{
    msg.innerHTML = "Draw";
    msg.style.backgroundColor = "#081b31";
    console.log('draw');
    
}

const showWinner = (userWin, userChoice, compChoice) =>
{
    if(userWin)
    {
        playerScore++;
        msg.innerHTML = `Player wins with ${userChoice} over ${compChoice}`;
        msg.style.backgroundColor = "green";
        player.innerHTML = playerScore;
        console.log('player wins');
    }
    else{
        computerScore++;
        msg.innerHTML = `Computer wins with ${compChoice} over ${userChoice}`;
        comp.innerHTML = computerScore;
        msg.style.backgroundColor = "red";
        console.log('computer wins');
    }
    showSeletimg(compChoice,rock,paper,scissor);
}

let playGame = ((userChoice) =>
{
  console.log('player choice: ', userChoice);
  // generate computer choice
  let compChoice = computerChoice();
  console.log('computer choice: ', compChoice);

  if(userChoice === compChoice)
  {
        drawGame();
        showSeletimg(compChoice,rock,paper,scissor);
  }
  else{
    let userWin = true;
    if(userChoice === "rock")
    {
        if(compChoice === "paper")
        {
            userWin = false;
        }
        else if(compChoice === "scissor")
        {
            userWin = true;
        }
    }
    else if(userChoice === "paper")
    {
        if(compChoice === "rock")
        {
            userWin = true;
        }
        else if(compChoice === "scissor")
        {
            userWin = false;
        }
    }
    else if(userChoice === "scissor")
    {
        if(compChoice === "rock")
        {
            userWin = false;
        }
        else if(compChoice === "paper")
        {
            userWin = true;
        }
    }
showWinner(userWin, userChoice, compChoice);
  }
});

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});