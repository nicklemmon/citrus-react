import React from 'react';
import classnames from 'classnames';

import './ButtonWrapper.css';

export default class ButtonWrapper extends React.Component {
  render() {
    const classNames = `ButtonWrapper ${ classnames( this.props.classes ) }`;

    return (
      <div className={ classNames }>
        { this.props.children }
      </div>
    )
  }
}