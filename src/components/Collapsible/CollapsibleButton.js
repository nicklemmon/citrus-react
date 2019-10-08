import React, { useContext, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { CollapsibleContext } from './CollapsibleContext'
import { arrow_right } from 'react-icons-kit/ikons/arrow_right'
import { arrow_up } from 'react-icons-kit/ikons/arrow_up'
import Icon from '../Icon'

export default function CollapsibleButton(props) {
  const buttonEl = useRef(null)
  const { id, children, hasLeftChevron, hasRightChevron } = props
  const { eventType, setEventType, isOpen, setIsOpen } = useContext(CollapsibleContext)

  const CollapsibleButton = styled.button`
    border: 0;
    font-size: ${props => props.theme.fontSizes[1]};
    background-color: ${props => (isOpen ? props.theme.colors.offWhite : props.theme.colors.white)};
    width: 100%;
    text-align: left;
    padding: ${props => props.theme.space[3]};
    cursor: pointer;
    outline: none;
    border-radius: ${props =>
      isOpen ? `${props.theme.radii[0]} ${props.theme.radii[0]} 0 0` : props.theme.radii[0]};
    border: 1px solid ${props => props.theme.colors.lightGray};
    transition: background-color ${props => props.theme.animation.timing}
        ${props => props.theme.animation.easing},
      box-shadow ${props => props.theme.animation.timing} ${props => props.theme.animation.easing};

    :hover {
      background-color: ${props => props.theme.colors.offWhite};
    }

    &:focus {
      box-shadow: 0 0 0 3px ${props => props.theme.colors.blue}66;
    }
  `
  const iconWrapperStyles = css`
    display: inline-flex;
    align-items: center;
    color: ${props => props.theme.colors.blue};
  `
  const LeftIconWrapper = styled.span`
    ${iconWrapperStyles}
    transform: translateY(-1px) ${isOpen && 'rotate(90deg)'};
    `
  const RightIconWrapper = styled.span`
    ${iconWrapperStyles}
    float: right;
    transform: ${isOpen ? 'rotate(180deg) translateY(-2px)' : 'translateY(-1px)'};
  `
  const ContentWrapper = styled.span`
    display: inline-flex;
    align-items: center;
    padding-left: ${props => hasLeftChevron && props.theme.space[1]};
  `

  const handleClick = e => {
    setIsOpen(!isOpen)
    setEventType(e.type)
  }

  useEffect(() => {
    if (eventType === 'click') buttonEl.current.focus()
  }, [eventType])

  return (
    <CollapsibleButton
      id={id}
      {...props}
      aria-expanded={isOpen ? 'true' : 'false'}
      onClick={e => handleClick(e)}
      ref={buttonEl}
    >
      {hasLeftChevron && (
        <LeftIconWrapper>
          <Icon icon={arrow_right} />
        </LeftIconWrapper>
      )}

      <ContentWrapper>{children}</ContentWrapper>

      {hasRightChevron && (
        <RightIconWrapper>
          <Icon icon={arrow_up} />
        </RightIconWrapper>
      )}
    </CollapsibleButton>
  )
}

CollapsibleButton.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  hasLeftChevron: PropTypes.bool,
  hasRightChevron: PropTypes.bool
}
