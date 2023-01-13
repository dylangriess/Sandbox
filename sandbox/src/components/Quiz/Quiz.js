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

function TriviaGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  return <div>Quiz</div>;
}

export default Quiz;
