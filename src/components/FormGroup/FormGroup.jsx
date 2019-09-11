import React from 'react'
import classNames from 'classnames'
import FaExclamationCircle from 'react-icons/lib/fa/exclamation-circle'

import './FormGroup.css'

export default class FormGroup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    const { id, label, type, placeholder, classes, errorMsg } = this.props

    const labelClassNames = classNames('FormGroup-label', {
      'FormGroup-label--error': errorMsg
    })

    const inputClassNames = classNames('FormGroup-input', classes, {
      'FormGroup-input--error': errorMsg
    })

    return (
      <div className="FormGroup">
        <label className={labelClassNames} htmlFor={id}>
          {label}
        </label>

        {type === 'textarea' ? (
          <textarea
            className={inputClassNames}
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            onChange={this.props.handleChange || this.handleChange}
            value={this.props.value || this.state.value}
          ></textarea>
        ) : (
          <input
            className={inputClassNames}
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            onChange={this.props.handleChange || this.handleChange}
            value={this.props.value || this.state.value}
            aria-describedby={`${errorMsg && { id } + 'error-msg'}`}
          />
        )}

        {errorMsg && (
          <div className="FormGroup-errorMsg" id={`${id}-error-msg`}>
            <FaExclamationCircle className="FormGroup-errorMsgIcon" />

            {errorMsg}
          </div>
        )}
      </div>
    )
  }
}
