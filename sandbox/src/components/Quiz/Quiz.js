import React, { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Rome", "Madrid", "Berlin"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Leonardo da Vinci",
      "Vincent van Gogh",
      "Pablo Picasso",
      "Rembrandt",
    ],
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the capital of the United States?",
    options: ["New York", "Washington D.C.", "Los Angeles", "Chicago"],
    answer: "Washington D.C.",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Pacific", "Indian", "Southern"],
    answer: "Pacific",
  },
  {
    question: "Which country has the Great Wall of China?",
    options: ["China", "India", "Russia", "USA"],
    answer: "China",
  },
  {
    question: "What is the highest mountain peak in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    answer: "Mount Everest",
  },
  {
    question: "In what year did World War II end?",
    options: ["1939", "1945", "1955", "1965"],
    answer: "1945",
  },
  {
    question: "Who wrote the famous novel 'To Kill a Mockingbird'?",
    options: [
      "Mark Twain",
      "F. Scott Fitzgerald",
      "Harper Lee",
      "Ernest Hemingway",
    ],
    answer: "Harper Lee",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Saturn", "Mars", "Jupiter", "Uranus"],
    answer: "Mars",
  },
  {
    question: "Who is the current president of Russia?",
    options: [
      "Vladimir Putin",
      "Dmitry Medvedev",
      "Nikolay Valuev",
      "Sergei Shoigu",
    ],
    answer: "Vladimir Putin",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra",
  },
  {
    question: "Which river is known as the 'Father of Rivers'?",
    options: ["Nile", "Yellow", "Amazon", "Mississippi"],
    answer: "Nile",
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  function checkAnswer(index) {
    if (
      questions[currentQuestion].options[index] ===
      questions[currentQuestion].answer
    ) {
      setScore(score + 1);
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
    setCurrentQuestion(currentQuestion + 1);
    if (currentQuestion >= 9) {
      alert(`Game over! Your score is ${score} out of 10!`);
      return;
    }
  }

  function startTimer() {
    setTimer(
      setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000)
    );
  }

  function stopTimer() {
    clearInterval(timer);
  }

  return (
    <div>
      <h1>QUIZ</h1>
      <h4>{questions[currentQuestion].question}</h4>
      {questions[currentQuestion].options.map((option, index) => (
        <button key={index} onClick={() => checkAnswer(index)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Quiz;
