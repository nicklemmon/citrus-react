import React from 'react'
import classNames from 'classnames'
import FaCaretRight from 'react-icons/lib/fa/caret-right'

import './Popover.css'

export default class Popover extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const { className, children, buttonContent } = this.props

    const isOpen = this.state.isOpen

    const classes = classNames('Popover', className, {
      'is-open': isOpen
    })
    const contentClasses = classNames('Popover-content', {
      'is-open': isOpen
    })
    const iconClasses = classNames('Popover-icon', {
      'is-rotated': isOpen
    })

    return (
      <div className={classes}>
        <button
          className="Popover-launcher"
          aria-expanded={isOpen}
          onClick={this.toggle}
        >
          {buttonContent}

          <FaCaretRight className={iconClasses} />
        </button>

        <div className={contentClasses} aria-hidden={!isOpen}>
          {children}
        </div>
      </div>
    )
  }
}
