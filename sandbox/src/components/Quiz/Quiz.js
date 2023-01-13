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
    if (currentQuestion >= questions.length) {
      alert(`Game over! Your score is ${score}`);
      return;
    }
  }

  return (
    <div>
      <h1>{questions[currentQuestion].question}</h1>
      {questions[currentQuestion].options.map((option, index) => (
        <button key={index} onClick={() => checkAnswer(index)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Quiz;
