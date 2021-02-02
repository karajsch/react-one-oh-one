import React from "react";

import "./styles.css";
import { QuestionCard } from "./comps/Card";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: []
    };
  }

  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=10&category=20")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response);
        this.setState({ questions: response.results });
      });
  }

  render() {
    return (
      <div>
        <h1>This is the app component</h1>
        {this.state.questions
          ? this.state.questions.map((question, index) => (
              <QuestionCard key={index} {...question} />
            ))
          : "No questions"}
      </div>
    );
  }
}
