import React, { Component } from 'react'
import Quiz from './Quiz.js'
import './App.css'

/**
 * App component
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * Render method
   *
   * @returns {object} React element
   * @memberof App
   */
  render() {
    return (
      <Quiz  />
    )
  }
}

export default App