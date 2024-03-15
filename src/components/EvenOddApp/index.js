// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  countIncrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const countText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="main-head">Count {count}</h1>

          <p className="description">Count is {countText}</p>

          <button
            className="button"
            type="button"
            onClick={this.countIncrement}
          >
            Increment
          </button>

          <p className="last-description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
