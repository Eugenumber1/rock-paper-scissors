let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
//normal variables and dumb variables
const ScoreBoard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// function which produces a random sign out of 3

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//function which converts one letter to the word of the artifact

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

// functions to say what heppened with user's game
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    result_p.innerHTML =
        convertToWord(userChoice) +
        " beats " +
        convertToWord(computerChoice) +
        ", YOU WIN!";
}

function lose(userChoice, computerChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    result_p.innerHTML =
        convertToWord(computerChoice) +
        " beats " +
        convertToWord(userChoice) +
        ", YOU LOSE!";
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    result_p.innerHTML =
        convertToWord(computerChoice) +
        " equals " +
        convertToWord(userChoice) +
        ", IT IS A DRAW!";
}

// game function which takes an artifact as an input
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
            win(userChoice, computerChoice);
            break;
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rp":
            lose(userChoice, computerChoice);
            break;
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
            draw(userChoice, computerChoice);
            break;
        case "ss":
            draw(userChoice, computerChoice);
            break;
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }
}

//these next are event listeners, which are performing
//something only if the user does something in the
//application

function main() {
    rock_div.addEventListener("click", function() {
        game("r");
    });

    paper_div.addEventListener("click", function() {
        game("p");
    });

    scissors_div.addEventListener("click", function() {
        game("s");
    });
}

main();