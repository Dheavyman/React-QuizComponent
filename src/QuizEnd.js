import React, { Component } from 'react'

/**
 * Quiz end component
 *
 * @class QuizEnd
 * @extends {Component}
 */
class QuizEnd extends Component {
  /**
   * Handle reset quiz event
   *
   * @memberof QuizEnd
   */
  handleResetClick() {
    this.props.resetClickHandler()
  }

  /**
   * Render method
   *
   * @returns {object} React element
   * @memberof QuizEnd
   */
  render() {
    return (
      <div>
        <p>Thanks for playing!</p>
        <a href='#' onClick={this.handleResetClick.bind(this)}>Reset Quiz</a>
      </div>
    )
  }
}

export default QuizEnd
