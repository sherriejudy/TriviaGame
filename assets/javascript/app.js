var questions = [
  {
    q: "What is Judy's favourite colour?",
    a: ["Blue", "Yellow", "Red", "Green"],
    solution: "Green"
    // link to gif
  },
  {
    q: "What is Judy's favourite dog breed?",
    a: ["Pug", "Rottweiller", "Chow Chow", "Golden Retreiver"],
    solution: "Pug"
    // link to gif
  },
  {
    q: "What is Judy's favourite cat breed?",
    a: ["Scottish Fold", "Egyption", "Tabby", "Garfield"],
    solution: "Scottish Fold"
    // link to gif
  },
  {
    q: "What is the capital Bulgaria?",
    a: ["Prague", "Sofia", "Helsinki", "Riga"],
    solution: "Sofia"
    // link to gif
  },
  {
    q: "What is the capital of Kenya?",
    a: ["Nairobi", "Mogadishu", "Lagos", "Cheyna"],
    solution: "Nairobi"
    // link to gif
  }
];
const TIME_LIMIT = 10;

var correct = 0;
var incorrect = 0;
var unanswered = questions.length;
var time = TIME_LIMIT;
var stopWatch;
var questionNumber = 0;
var currentSolution;
var answerTimer;
// Click Listeners
$("#start").on("click", start);
$(".answer").on("click", function() {
  answerWith(this);
});

// Start function
function start() {
  $("#timer").text("Time Remaining: " + time);
  $("#start").hide();
  updateText();
  setUpQuestion();
}

function setUpQuestion() {
  stopWatch = setInterval(timer, 1000);
  var currentQuestion = questions[questionNumber];
  currentSolution = currentQuestion.solution;

  $("#question").text(currentQuestion.q);
  $("#answers").removeClass("hidden");
  $(".answer").each(function(i) {
    $(this).text(currentQuestion.a[i]);
  });
}

function answerWith(answer) {
  resetTimer();
  unanswered--;
  if (currentSolution === $(answer).text()) {
    //Correct Solution
    correct++;
    showCorrectScreen();
  } else {
    //Incorrect Solution
    incorrect++;
    showIncorrectScreen();
  }
  answerTimer = setInterval(nextQuestion, 2000);
  updateText();
}

function updateText() {
  $("#correct").text("Correct: " + correct);
  $("#incorrect").text("Incorrect: " + incorrect);
  $("#unanswered").text("Unanswered: " + unanswered);
}

function showCorrectScreen() {
  showCorrectAnswer();
}
function showIncorrectScreen() {
  showCorrectAnswer();
}
function nextQuestion() {
  questionNumber++;
  if (questionNumber == questions.length) {
    showEndScreen();
  } else {
    clearInterval(answerTimer);
    resetButtons();
    setUpQuestion();
  }
}
function showEndScreen() {
  $("#question").text("COMPLETE");
  $("#answers").addClass("hidden");
  $("#timer").addClass("hidden");
}
function timer() {
  if (time > 0) {
    time--;
    $("#timer").text("Time Remaining: " + time);
  } else {
    outOfTime();
  }
}
function resetTimer() {
  clearInterval(stopWatch);
  time = TIME_LIMIT;
  $("#timer").text("Time Remaining: " + time);
}
function outOfTime() {
  resetTimer();
  $("#timer").text("Out Of Time");
  showCorrectAnswer();
}

function showCorrectAnswer() {
  for (var i = 1; i < 5; i++) {
    if ($("#" + i).text() == questions[questionNumber].solution) {
      // Correct answer
      $("#" + i).addClass("btn-success");
    } else {
      // Incorrect answers
      $("#" + i).addClass("btn-danger");
    }
    $("#" + i).prop("disabled", true);
  }
}
function resetButtons() {
  for (var i = 1; i < 5; i++) {
    $("#" + i).removeClass("btn-success");
    $("#" + i).removeClass("btn-danger");
    $("#" + i).prop("disabled", false);
  }
}
