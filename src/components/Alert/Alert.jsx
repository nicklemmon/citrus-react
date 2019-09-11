import React from 'react'
import classnames from 'classnames'
import FaCheckCircle from 'react-icons/lib/fa/check-circle'
import FaExclamationCircle from 'react-icons/lib/fa/exclamation-circle'
import FaExclamationTriangle from 'react-icons/lib/fa/exclamation-triangle'
import FaInfoCircle from 'react-icons/lib/fa/info-circle'
import FaClose from 'react-icons/lib/fa/close'

import './Alert.css'

export default class Alert extends React.Component {
  constructor(props) {
    super(props)

    this.alertContent = React.createRef()

    this.state = {
      isHidden: false
    }

    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
  }

  componentDidMount() {
    this.alertContent.current.focus()
  }

  show() {
    this.setState({
      isHidden: false
    })
  }

  hide() {
    this.setState({
      isHidden: true
    })
  }

  render() {
    const { type, content, classes, isDismissable, closeOnClick } = this.props

    const calculatedClassNames = `Alert Alert--${type} ${classnames({
      classes
    })}`
    const isHidden = this.state.isHidden

    return (
      <React.Fragment>
        {!isHidden && (
          <div className={calculatedClassNames} role="alert" tabIndex="-1">
            <div className="Alert-pre">
              {type === 'error' && (
                <FaExclamationCircle className="Alert-icon" />
              )}

              {type === 'success' && <FaCheckCircle className="Alert-icon" />}

              {type === 'attention' && (
                <FaExclamationTriangle className="Alert-icon" />
              )}

              {type === 'info' && <FaInfoCircle className="Alert-icon" />}
            </div>

            <div
              className="Alert-content"
              ref={this.alertContent}
              tabIndex="-1"
            >
              {content}
            </div>

            {isDismissable && (
              <button
                className="Alert-close"
                onClick={closeOnClick}
                aria-label="Close"
              >
                <FaClose />
              </button>
            )}
          </div>
        )}
      </React.Fragment>
    )
  }
}
