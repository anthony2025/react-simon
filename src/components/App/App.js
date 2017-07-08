import React from 'react'
import styled from 'styled-components'

import GithubCorner from 'components/GithubCorner'
import Board from 'components/Board'
import StateOverlay from 'components/StateOverlay'
import Footer from 'components/Footer'

export default function App(props) {
  return (
    <Wrapper>
      <GithubCorner />
      <BoardContainer>
        <StyledBoard />
      </BoardContainer>
      <StateContainer>
        <StateOverlay />
      </StateContainer>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`display: flex;`

const BoardContainer = styled.div`
  flex-grow: 1;
  height: 100vh;
  background: ${props => props.theme.opposite};
  display: flex;
  justify-content: center;
  align-items: center;
`

const StateContainer = styled.div`
  height: 100vh;
  width: 45vw;
  background: ${props => props.theme.primary};
  box-shadow: -2px 0 5px rgba(0, 0, 0, .3);
  margin-left: auto;
  @media (max-width: 600px) {
    display: none;
  }
`

const StyledBoard = styled(Board)`
  height: 90vh;
  width: 90%;
`
