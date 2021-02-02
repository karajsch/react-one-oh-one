import React, { useState } from "react";

export const QuestionCard = (props) => {
  /*
  constructor(){
    super()
    this.state={}
  }
  */

  const [chosen, setChosen] = useState();

  return (
    <div>
      <h3>{props.question}</h3>
      <p onClick={() => setChosen(props.correct_answer)}>
        {props.correct_answer}
      </p>
      {props.incorrect_answers.map((answer, index) => (
        <p key={index} onClick={() => setChosen(answer)}>
          {answer}
        </p>
      ))}
      <b>
        Chosen:
        {chosen === props.correct_answer ? (
          <p style={{ color: "green" }}>Correct</p>
        ) : (
          "incorrect"
        )}
      </b>
    </div>
  );
};
