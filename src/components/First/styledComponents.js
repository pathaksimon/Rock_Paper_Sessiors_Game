import styled from 'styled-components'

export const Maincontainer = styled.div`
  color: black;
  background-color: #223a5f;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Gamecontainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Iconscard = styled.div`
  width: 90%;
  height: 400px;
  display: flex;
  flex-direction: ${props => (props.direction ? 'column' : 'column')};
  justify-content: center;
`
export const CardButton = styled.div`
  width: 25%;
`
export const Imagebitta = styled.img`
  width: 100%;
`
export const CardButton12 = styled.button`
  width: 25%;

  margin: auto;
`
export const Inside = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
`
export const Paras = styled.p`
  color: black;
  margin: auto;
  font-size: 30px;
  color: white;
`
