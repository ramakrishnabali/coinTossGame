// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {isHead: true, headCount: 0, tailCount: 0}

  onClickButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult !== 0) {
      this.setState(prevState => ({
        isHead: false,
        tailCount: prevState.tailCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        isHead: true,
        headCount: prevState.headCount + 1,
      }))
    }
    // console.log(tossResult)
  }

  render() {
    const {isHead, headCount, tailCount} = this.state
    const total = headCount + tailCount

    const image = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="appContainer">
        <div className="coinContainer">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img className="image" src={image} alt="toss result" />
          <button onClick={this.onClickButton} className="button" type="button">
            Toss Coin
          </button>
          <div className="totalContainer">
            <p className="info">Total: {total}</p>
            <p className="info">Heads: {headCount}</p>
            <p className="info">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
