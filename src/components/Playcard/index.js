import {Firsticon, Secondicon, CardButton, Imagebitta} from './styledComponent'

const Playcard = props => {
  const {first, third} = props

  return (
    <>
      <Firsticon>
        <CardButton data-testid="rockButton" onClick={() => third(first[0].id)}>
          <Imagebitta
            alt={first[0].id}
            key={first[0].id}
            src={first[0].imageUrl}
          />
        </CardButton>
        <CardButton
          data-testid="scissorsButton"
          onClick={() => third(first[1].id)}
        >
          {' '}
          <Imagebitta
            alt={first[1].id}
            key={first[1].id}
            src={first[1].imageUrl}
          />
        </CardButton>
      </Firsticon>
      <Secondicon>
        <CardButton
          data-testid="paperButton"
          onClick={() => third(first[2].id)}
        >
          {' '}
          <Imagebitta
            alt={first[2].id}
            key={first[2].id}
            src={first[2].imageUrl}
          />
        </CardButton>
      </Secondicon>
    </>
  )
}

export default Playcard
