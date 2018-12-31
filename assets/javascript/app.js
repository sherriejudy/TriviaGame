$("#start").on("click", start);
$(".answer").on("click", nextQuestion);

var questions = [
  {
    question: "What is my birthday?",
    answers: ["Jan", "Feb", "Mar", "Dec"],
    solution: "Jan"
  },
  {
    question: "What is Judy's birthmonth?",
    answers: ["Jan", "Feb", "Aug", "Dec"],
    solution: "Aug"
  },
  {
    question: "What is blue?",
    answers: ["color", "car", "box", "no"],
    solution: "color"
  }
];
var time = 3;
var stopwatch;
var correct = 0;
var incorrect = 0;
var unanswered = questions.length;

function start() {
  $("#start").hide();
  resetTimer();
  updateStats();
  //Set up questions
  setupQuestions();
}
function resetTimer() {
  $("#timer").text("Time Left: " + time);
  stopwatch = setInterval(reduceTime, 1000);
}
function reduceTime() {
  time--;
  if (time > 0) {
    $("#timer").text("Time Left: " + time);
  } else {
    $("#timer").text("Out of Time!!!");
    clearInterval(stopwatch);
  }
}
function updateStats() {
  $("#correct").text("Correct: " + correct);
  $("#incorrect").text("Incorrect: " + incorrect);
  $("#unanswered").text("Unanswered: " + unanswered);
}
function setupQuestions() {
  $("#answers").removeClass("hidden");
  $("#question").text(questions[0].question);
  for (var i = 0; i < 4; i++) {
    $("#" + i).text(questions[0].answers[i]);
  }
}
function nextQuestion() {
  console.log("CLicked");
}
