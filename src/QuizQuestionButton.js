import React, { Component } from 'react'

/**
 * Quiz question button component
 *
 * @class QuizQuestionButton
 * @extends {Component}
 */
class QuizQuestionButton extends Component {
  /**
   * Handle button click event
   *
   * @returns {undefined} Calls the click handler function
   * @memberof QuizQuestionButton
   */
  handleClick() {
    this.props.clickHandler(this.props.button_text)
  }

  /**
   * Render method
   *
   * @returns {object} React element
   * @memberof QuizQuestionButton
   */
  render() {
    return (
      <li>
        <button
          onClick={this.handleClick.bind(this)}
        >
          {this.props.button_text}
        </button>
      </li>
    )
  }
}

export default QuizQuestionButton
