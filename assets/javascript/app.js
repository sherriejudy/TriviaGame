var questions = [
  {
    q: "What is Judy's favourite colour?",
    a: ["Blue", "Yellow", "Red", "Green"],
    solution: "Green"
    // link to gif
  },
  {
    q: "What is Judy's favourite dog breed",
    a: ["Pug", "Yellow", "Red", "Green"],
    solution: "Pug"
    // link to gif
  }
];

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 5;
var stopWatch;

$(".start").on("click", function() {
  start();
});
function start() {
  console.log("click");
  stopWatch = setInterval(timer, 1000);
  $("#question").text(questions[0].q);
  for (var i = 0; i < questions[0].a.length; i++) {
    var button = $("<button>");
    button.text(questions[0].a[i]);
    $("#answer").append(button);
  }
}

function timer() {
  if (time > 0) {
    time--;
    console.log(time);
  } else {
    clearInterval(stopWatch);
  }
}
