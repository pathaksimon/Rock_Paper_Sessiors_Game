import {Component} from 'react'
import {
  Maincontainer,
  Gamecontainer,
  Iconscard,
  CardButton,
  CardButton12,
  Imagebitta,
  Inside,
  Paras,
} from './styledComponents'
import Scorecard from '../Scorecard'
import Playcard from '../Playcard'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class First extends Component {
  state = {
    count: 0,
    status: '',
    close: {},
    clicked: false,
    type: '',
  }

  third = mid => {
    const lengtha = choicesList.length
    const Randomness = Math.random() * lengtha
    const flooring = Math.floor(Randomness)
    const final = choicesList[flooring]
    const filteration = choicesList.filter(each => each.id === mid)
    this.setState({type: filteration})
    this.setState({close: final})
    this.setState({clicked: true})
    if (mid === 'ROCK' && final.id === 'SCISSORS') {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }))
      this.setState({status: 'YOU WON'})
    } else if (mid === 'SCISSORS' && final.id === 'PAPER') {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }))
      this.setState({status: 'YOU WON'})
    } else if (mid === 'PAPER' && final.id === 'ROCK') {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }))
      this.setState({status: 'YOU WON'})
    } else if (mid === final.id) {
      this.setState(prevState => ({
        count: prevState.count,
      }))
      this.setState({status: 'IT IS DRAW'})
    } else {
      this.setState(prevState => ({
        count: prevState.count - 1,
      }))
      this.setState({status: 'YOU LOSE'})
    }
  }

  playagain = () => {
    this.setState({clicked: false})
  }

  winning = () => {
    const {count, status, close, clicked, type} = this.state
    const {imageUrl} = close
    return (
      <>
        <Inside>
          <CardButton>
            <Paras>YOU</Paras>
            <Imagebitta alt="your choice" src={type[0].imageUrl} />
          </CardButton>
          <CardButton>
            <Paras>OPPONENT</Paras>
            <Imagebitta alt="opponent choice" src={imageUrl} />
          </CardButton>
        </Inside>
        <Paras>Samiksha {status}</Paras>
        <CardButton12 onClick={this.playagain}>PLAY AGAIN</CardButton12>
      </>
    )
  }

  centerist = () => {
    const {count, status, close, clicked} = this.state
    if (clicked) {
      return this.winning()
    }
    return <Playcard first={choicesList} third={this.third} />
  }

  render() {
    const {count, status, close, type, clicked} = this.state

    console.log(count)
    console.log(status)
    console.log(close)
    console.log(type)
    return (
      <Maincontainer>
        <Gamecontainer>
          <Scorecard fourth={this.state} />
          <Iconscard direction={clicked}>{this.centerist()}</Iconscard>
        </Gamecontainer>
      </Maincontainer>
    )
  }
}
export default First
