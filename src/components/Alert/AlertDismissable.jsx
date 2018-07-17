import React from 'react';

import Alert from './Alert.jsx';

export default class AlertDismissable extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      isVisible: true
    }

    this.dismiss = this.dismiss.bind( this );
  }

  dismiss() {
    this.setState({
      isVisible: false
    })
  }

  render() {
    const {
      type,
      content,
      alertClasses
    } = this.props;

    const isVisible = this.state.isVisible;

    return(
      <div class='AlertDismissable' aria-hidden={ !isVisible }>
        { isVisible &&
          <Alert
            type={ type }
            content={ content }
            classes={ alertClasses }
            isDismissable={ true }
            closeOnClick={ this.dismiss }
          />
        }
      </div>
    )
  }
}