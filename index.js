var readlineSync = require("readline-sync");

score = 0;

var userAnswerOne = readlineSync.question('What is your name? ');

console.log("welcome to Quiz "+ userAnswerOne);


function play(question,answer) {
  var userAnswerTwo = readlineSync.question(question);

  if (userAnswerTwo === answer) {
    console.log("You are right");
    score = score + 1;
  } else {
    console.log("You are wrong");
    score = score - 1;
  }
  console.log("Your score is: " + score)
  console.log("---------")
}

console.log("Start your answers with first letter capital")
console.log("-----------")

var questions =[{
  question: "What is my name? ",
  answer: "Tushar"
}, {   
question: "Where did I live? ",
answer: "Kalyan"
},{
  question: "Which food I love most? Options (Vadapav,Hakka noddle) ",
answer: "Vadapav"
},{
  question: "Which Degree I am Pursuing? ",
answer: "B.com"
},{
  question: "Did I got above 90% in 10th? ",
answer: "Yes"
},{
  question: "What is my mother tongue? ",
answer: "Marathi"
}

];

for(i=0; i<questions.length; i++) {
play(questions[i].question,questions[i].answer);
}

console.log("WoW! Your total score is: " + score)

var highscores =[{
  name: "Ritesh", 
  score: "3"
},{
  name: "Devesh",
  score: "5"
}]

for(var i=0; i<highscores.length; i++) 
console.log(highscores[i].name , "total score: " + highscores[i].score);  

console.log("Gave me your Highscore on Whatsapp so I will update highscore list ")









