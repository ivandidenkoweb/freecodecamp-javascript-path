const questions = [
  {
    category: "Geography",
    question: "Which is the largest ocean on Earth?",
    choices: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean",
  },
  {
    category: "Science",
    question: "What is the chemical symbol for Gold?",
    choices: ["Gd", "Au", "Ag"],
    answer: "Au",
  },
  {
    category: "History",
    question: "In which year did World War II end?",
    choices: ["1945", "1918", "1939"],
    answer: "1945",
  },
  {
    category: "Technology",
    question: "What does CPU stand for?",
    choices: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processing Unit",
    ],
    answer: "Central Processing Unit",
  },
  {
    category: "Literature",
    question: "Who wrote 'Romeo and Juliet'?",
    choices: ["Charles Dickens", "William Shakespeare", "Mark Twain"],
    answer: "William Shakespeare",
  },
];

let getRandomQuestion = (arr) =>
  arr[Math.round(Math.random() * (arr.length - 1))];

let getRandomComputerChoice = (arr) =>
  arr[Math.round(Math.random() * (arr.length - 1))];

function getResults(objQuestion, choice) {
  if (objQuestion.answer === choice) {
    return `The computer's choice is correct!`;
  } else {
    return `The computer's choice is wrong. The correct answer is: ${objQuestion.answer}`;
  }
}
