import React, { useState } from "react";
import questions from "./constants/questions.json";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswes, setUserAnswers] = useState([]);
  return (
    <div>
      <h1>World Quiz</h1>
    </div>
  );
};

export default App;
