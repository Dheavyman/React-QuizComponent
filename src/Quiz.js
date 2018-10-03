import React, { Component } from 'react'

import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd'

let quizData = require('./quiz_data.json')

/**
 * Quiz component
 *
 * @class Quiz
 * @extends {Component}
 */
class Quiz extends Component {
  /**
   *Creates an instance of Quiz.
   *
   * @param {object} props - Properties passed to component
   * @memberof Quiz
   */
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1,
    }
  }

  /**
   * Handle show next question event
   *
   * @returns {undefined} Updates the state
   * @memberof Quiz
   */
  showNextQuestion() {
    this.setState(prevState => ({
      quiz_position: prevState.quiz_position + 1
    }))
  }

  /**
   * Handle reset quiz event
   *
   * @returns {undefined} Updates the state
   * @memberof Quiz
   */
  handleResetClick() {
    this.setState({
      quiz_position: 1,
    })
  }

  /**
   * Render method
   *
   * @returns {object} React element
   * @memberof Quiz
   */
  render () {
    const isQuizEnd = (this.state.quiz_position - 1) ===
      quizData.quiz_questions.length
    return (
      <div>
        {isQuizEnd
        ? <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} />
        : (
          <QuizQuestion
            quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}
            showNextQuestionHandler={this.showNextQuestion.bind(this)}
          />
        )}
      </div>
    )
  }
}

export default Quiz
