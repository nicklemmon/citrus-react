import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color, space } from 'styled-system'

export default function Accordion(props) {
  const { buttonContent, children } = props
  const AccordionWrapper = styled.div`
    ${color}
    ${space}
  `
  const AccordionContent = styled.div``

  return (
    <AccordionWrapper {...props}>
      <button>{buttonContent}</button>

      <AccordionContent>{children}</AccordionContent>
    </AccordionWrapper>
  )
}

Accordion.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  buttonContent: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

// export default class Accordion extends React.Component {
//   constructor(props) {
//     super(props)

//     this.open = this.open.bind(this)
//     this.close = this.close.bind(this)
//     this.toggle = this.toggle.bind(this)

//     this.state = {
//       isOpen: false
//     }
//   }

//   open() {
//     this.setState({
//       isOpen: true
//     })
//   }

//   close() {
//     this.setState({
//       isOpen: false
//     })
//   }

//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     })
//   }

//   render() {
//     const { className, triggerContent, children, type } = this.props
//     const isOpen = this.props.isOpen || this.state.isOpen
//     const classes = classNames('Accordion', className, {
//       'is-open': isOpen,
//       'Accordion--minimal': type === 'minimal'
//     })
//     const triggerClasses = classNames('Accordion-trigger', {
//       'Accordion-trigger--minimal': type === 'minimal'
//     })
//     const iconClasses = classNames('Accordion-icon', {
//       'is-open': isOpen
//     })
//     const contentClasses = classNames('Accordion-content', {
//       'is-open': isOpen
//     })

//     return (
//       <div className={classes}>
//         <button
//           className={triggerClasses}
//           onClick={this.toggle}
//           aria-expanded={isOpen}
//         >
//           <FaAngleRight className={iconClasses} />

//           {triggerContent}
//         </button>

//         <div className={contentClasses}>{children}</div>
//       </div>
//     )
//   }
// }
