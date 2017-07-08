/*
 * wrapper of Tim Holman's Github Corners
 * https://github.com/tholman/github-corners
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled, {keyframes} from 'styled-components'

GithubCorner.propTypes = {
  left: PropTypes.bool,
  repository: PropTypes.string
}

GithubCorner.defaultProps = {
  left: false
}

export default function GithubCorner(props) {
  return (
    <Wrapper href={props.repository} left={props.left}>
      {props.left
        ? <Background
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 250 250"
          >
            <OctoBody d="M250 0L135 115h-15l-12 27L0 250V0z" />
            <OctoArm d="M122 109c15-9 9-19 9-19-3-7-2-11-2-11 1-7-3-2-3-2-4 5-2 11-2 11 3 10-5 15-9 16" />
            <path d="M135 115s-4 2-5 0l-14-14c-3-2-6-3-8-3 8-11 15-24-2-41-5-5-10-7-16-7-1-2-3-7-12-11 0 0-5 3-7 16-4 2-8 5-12 9s-7 8-9 12c-14 4-17 9-17 9 4 8 9 11 11 11 0 6 2 11 7 16 16 16 30 10 41 2 0 3 1 7 5 11l12 11c1 2-1 6-1 6z" />
          </Background>
        : <Background
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 250 250"
          >
            <OctoBody d="M0 0l115 115h15l12 27 108 108V0z" />
            <OctoArm d="M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16" />
            <path d="M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z" />
          </Background>}
    </Wrapper>
  )
}

const octocatWave = keyframes`
  0% {transform: rotate(0deg);}
  20% {transform: rotate(-25deg);}
  40% {transform: rotate(10deg);}
  60% {transform: rotate(-25deg);}
  80% {transform: rotate(10deg);}
  100% {transform: rotate(0deg);}
`

const Wrapper = styled.a`
  position: absolute;
  top: 0;
  right: ${props => (props.left ? 'auto' : '0')};
`

const OctoArm = styled.path`
  transform-origin: 130px 106px;
  ${Wrapper}:hover & {
    animation: ${octocatWave} 560ms ease-in-out;
  }

  @media (max-width: 500px) {
    ${Wrapper}:hover & {
      animation: none;
    }
    animation: ${octocatWave} 560ms ease-in-out;
  }
`

const Background = styled.svg`
  @media (max-width: 700px) {
    fill: ${props => props.theme.opposite};
  }
  fill: ${props => props.theme.primary};
`

const OctoBody = styled.path`
  @media (max-width: 700px) {
    fill: ${props => props.theme.primary};
  }
  fill: ${props => props.theme.opposite};
`
