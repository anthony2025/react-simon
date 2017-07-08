import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

StateOverlay.propTypes = {
  gameTree: PropTypes.string
}

export default function StateOverlay(props) {
  return (
    <Wrapper className={props.className}>
      <pre>
        {props.gameTree}
      </pre>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: ${props => props.theme.opposite};
  background-color: inherit;
  font-size: 2vmax;
`
