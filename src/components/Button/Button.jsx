import React from 'react'
import classnames from 'classnames'
import { NavLink } from 'react-router-dom'
import './Button.css'

export default class Button extends React.Component {
  render() {
    const {
      type,
      classes,
      linkTo,
      content,
      fullWidth,
      role,
      tabIndex
    } = this.props
    const calculatedClassNames = `Button Button--${type} ${classnames({
      classes
    })}`
    const styles = { width: fullWidth ? '100%' : '' }

    return (
      <React.Fragment>
        {linkTo ? (
          <NavLink
            className={calculatedClassNames}
            style={styles}
            to={linkTo}
            role={role}
            tabIndex={tabIndex}
          >
            {content}
          </NavLink>
        ) : (
          <button
            className={calculatedClassNames}
            style={styles}
            onClick={this.props.onClick}
            role={role}
            tabIndex={tabIndex}
          >
            {content}
          </button>
        )}
      </React.Fragment>
    )
  }
}
