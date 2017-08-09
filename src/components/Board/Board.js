import React from 'react'
import styled from 'styled-components'

import Pad from 'components/Pad'
import shake from 'styling/shakeAnimation'

import sound1 from './audios/sound1.mp3'
import sound2 from './audios/sound2.mp3'
import sound3 from './audios/sound3.mp3'
import sound4 from './audios/sound4.mp3'

export default function Board(props) {
  return (
    <Wrapper className={props.className}>
      <Pad color="green" sound={sound1} />
      <Pad color="red" sound={sound2} />
      <Pad color="blue" sound={sound3} />
      <Pad color="yellow" sound={sound4} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  --bordersThickness: 20px;
  background-color: ${props => props.theme.primary};
  border: 0 solid ${props => props.theme.primary};
  box-shadow: 2px 6px 17px rgba(0, 0, 0, .4);
  overflow: hidden;
  border-radius: 10px;

  border-width: var(--bordersThickness);
  grid-gap: var(--bordersThickness);

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "green red" "yellow blue";
  animation: ${shake} .8s ease;
`
