import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import Heading from '../Heading'

const StyledWrapper = styled.div`
  ${space}
  border-radius: ${props => props.theme.radii[0]};
  border: 1px solid ${props => props.theme.colors.offWhite};
  box-shadow: ${props =>
    props.hasShadow ? `0 4px 8px 0 ${props.theme.colors.darkGray}15` : 'none'};
`

const Header = styled.div`
  border-radius: ${props => props.theme.radii[0]} ${props => props.theme.radii[0]} 0 0;
  border-bottom: 1px solid ${props => props.theme.colors.offWhite};
  padding: ${props => props.theme.space[3]};
`

const Content = styled.div`
  padding: ${props => props.theme.space[3]};
  color: ${props => props.theme.colors.darkGray};
`

function Card(props) {
  const { children, hasShadow } = props

  return <StyledWrapper hasShadow={hasShadow}>{children}</StyledWrapper>
}

function CardHeading({ children, as = 'h3' }) {
  return (
    <Heading as={as} looksLike="h6">
      {children}
    </Heading>
  )
}

Content.displayName = 'Card.Content'
Card.Content = Content

Header.displayName = 'Card.Header'
Card.Header = Header

CardHeading.displayName = 'Card.Heading'
Card.Heading = CardHeading

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  hasShadow: PropTypes.bool
}

Card.defaultProps = {
  hasShadow: false
}

export default Card
