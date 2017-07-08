import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

Footer.propTypes = {
  devEmail: PropTypes.string
}

export default function Footer(props) {
  return (
    <Wrapper className={props.className}>
      <Link href={`mailto:${props.devEmail}`}>
        made with <Heart>♥</Heart> by Anthony
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: right;
  position: absolute;
  right: 5px;
  bottom: 5px;
`

const Link = styled.a`
  font-family: Helvetica;
  font-size: 10px;
  @media (max-width: 600px) {
    color: ${props => props.theme.primary};
  }
  @media (min-width: 600px) {
    color: ${props => props.theme.opposite};
  }
`
const Heart = styled.span`color: ${props => props.theme.red};`
