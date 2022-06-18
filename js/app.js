var startGameButton = document.getElementById('letsGoBtnIndex');
var questionTitleEl = document.getElementById('diffQuestions');
var questionChoices = document.getElementById('listOptions');
var nextButton = document.getElementById ('letsGoBtn');

var feedbackEl = document.querySelector("#feedback");
// used to keep track of which question we are on
var questionNumber = 0; 

//Values for choices --Idea: from the third party source
var optionOneEl = document.getElementById("#option1");
var optionTwoEl = document.getElementById("#option2");
var optionThreeEl = document.getElementById("#option3");

let timeRemaining = 120;
//global variable to stop the action when you click the view highscore
var timeInterval; 

// Start Timer
const minute = 02;
let time = minute * 60;

const countdownEl = document.getElementById('sectiontimer');

let timerId = setInterval(countdown, 1000);

function countdown () {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (time == -1) {
      clearTimeout(timerId);
  } else {
    countdownEl.innerHTML = `0${minutes}: ${seconds}`;
    time--;
  }

}

//Display questions
function randomQuestions(id) {
  if (questionNumber < questions.length) {
      questionTitleEl.textContent = questions[questionNumber].title;
      optionOneEl.value = questions[questionNumber].choices[0];
      optionTwoEl.value = questions[questionNumber].choices[1];
      optionThreeEl.value = questions[questionNumber].choices[2];
  }
}

//this clears the feedback to the user
function clearResponse() {
  feedbackEl.textContent = "";
}

//feedback for correct answer
function correctResponse() {
  feedbackEl.textContent = "You're Awesome";
  setTimeout(clearResponse, 500);
  questionNumber++;
  showQuestion();
}

// feedback for wrong answer
function wrongResponse() {
  timeLeft = timeLeft - 10;
  feedbackEl.textContent = "Try again";
  setTimeout(clearResponse, 500);
}

// feedback for when the user response was incorrect
function wrongResponse() {
  timeLeft = timeLeft - 10;
  feedbackEl.textContent = "wrong";
  setTimeout(clearResponse, 500);
}

// event listener for option 1
optionOneEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (optionOneEl.value == questions[questionNumber].answer) {
      correctResponse();
  }
  else {
      wrongResponse();
  }
});

// event listener for option 2
optionTwoEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (optionTwoEl.value === questions[questionNumber].answer) {
      correctResponse();
  }
  else {
      wrongResponse();
  }
});

// event listener for option 3
optionThreeEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (optionThreeEl.value === questions[questionNumber].answer) {
      correctResponse();
  }
  else {
      wrongResponse();
  }
});

//function to call the first question
function startQuiz() {
  questionNumber = 0;
  timeLeft = 80;
  score = 0;

  showQuestion();

  // time is decremented every second
  timeInterval = setInterval(function () {
      timeLeft--;
      timeEl.textContent = "Time: " + timeLeft;

      // when the time runs out or we are out of questions the game stops
      if (timeLeft <= 0 || questionNumber >= questions.length) {
          clearInterval(timeInterval);
          gameOver();
      }
  }, 1000);
}

//Event listener for the Lets Go button @index.html
startGameButton.addEventListener("click", function (event) {

  startQuiz();
});



//Once the user click the Lets Go button it will start the 

// display a question - starting with 1st question
// elements in the questions page
//const questionTitleEl = document.getElementById('diffQuestions'); // displays the question for the user 
//const option1El = document.querySelector("#option1"); // first option in the question
//const option2El = document.querySelector("#option2"); // second option in the question
//const option3El = document.querySelector("#option3"); // third option for the question


// Start Timer

//let timeLeft = 80;
//let elem = document.getElementById('sectiontimer');
//let timerId = setInterval(countdown, 1000);
//
//function countdown() {
//    if (timeLeft == -1) {
//        clearTimeout(timerId);
//        doSomething();
//    } else {
//        elem.innerHTML = timeLeft + '        ' + 'seconds';
//        timeLeft--;
//    }
//};

//-------------------
//const minute = 01;
//let time = minute * 60;
//
//const countdownEl = document.getElementById('sectiontimer');
//
//setInterval(countdown, 1000);
//
//function countdown () {
//  const minutes = Math.floor(time / 60);
//  let seconds = time % 60;
//
//  seconds = seconds < 02 ? '0' + seconds : seconds;
//
//  countdownEl.innerHTML = `${minutes}: ${seconds}`;
//  
//  time--;
//}


//let timeElm = document.getElementById('sectiontimer');
//let timer = function(x) {
// if(x === 0) {
//    return;
// }
//
// timeElm.innerHTML = x;
//
// return setTimeout(() => {timer(--x)}, 1000)
//}
//
//timer(80);



// handle question click - check whether the ans is correct or wrong

// end the quiz and show highscores

//Still working on the code.. apologies for being slow 🐢
//I'll create multiple commits after this




