import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Heading from '../Heading'

export default function CardHeading(props) {
  const { children, level } = props
  const HeadingWrapper = styled.span`
    ${Heading} {
      font-size: ${props => props.theme.fontSizes[1]};
      color: ${props => props.theme.colors.darkGray};
      letter-spacing: 0.025rem;
      font-weight: 500;
    }
  `

  return (
    <HeadingWrapper>
      <Heading level={level}>{children}</Heading>
    </HeadingWrapper>
  )
}

CardHeading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.number
}

CardHeading.defaultProps = {
  level: 3
}
