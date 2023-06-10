import {Scoring, Card, Card1} from './styledComponents'

const Scorecard = props => {
  const {fourth} = props
  const {count} = fourth
  return (
    <Scoring>
      <Card>Rock Paper Scissors</Card>
      <Card1>Score {count}</Card1>
    </Scoring>
  )
}

export default Scorecard
