//const questionTitleEl = document.getElementById('diffQuestions');
//const questionChoices = document.getElementById('listOptions');

// Start Timer
const minute = 01;
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

  //seconds = seconds < 00 ? '00' + seconds : seconds;

}

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


// display a question - starting with 1st question
function renderQuestion(questionIndex){

    // get the question
    const question = questions[questionIndex]
  
    // create the structure
    // set the question title
    questionTitleEl.textContent = question.title;
  
  
    // set the choices
    const choices = question.choices;
    questionChoices.textContent = "";
  
    for (let index = 0; index < choices.length; index++) {
      const choice = choices[index];
  
        // <li>
        //   <button class="question-choice">Good</button>
        // </li>;
  
      const li = document.createElement('li');
  
      const button = document.querySelector('.list-group-item');
  
  
  
      button.setAttribute('class', 'list-group-item');
      button.textContent = choice.title;
  
  
      button.addEventListener('click', function(event){
        // question
        // user click on choice
  
        // if user click on the correct answer
        if(choice.isAnswer){
          // give feedback correct
  
  
  
        }else{
          // if user click on the wrong answer
          // deduct 10 sec away from timer
          timeRemaining = timeRemaining - 10;
  
          // show feedback -- wrong
  
        }
        // if user click on the choice of the final question
        const nextQuestionIndex = questionIndex + 1;
  
        if(nextQuestionIndex >= questions.length){
          // end game
          return endGame()
        }
  
  
        // move on to the next question
        renderQuestion(nextQuestionIndex);
        
  
  
      });
  
  
      li.appendChild(button);
  
      questionChoices.append(li);
    }
  
  
  
}
// handle question click - check whether the ans is correct or wrong

// end the quiz and show highscores

//Still working on the code.. apologies for being slow 🐢
//I'll create multiple commits after this




