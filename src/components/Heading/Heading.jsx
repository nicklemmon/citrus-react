import React from 'react';
import classnames from 'classnames';

import './Heading.css';

export default class Heading extends React.Component {
  render() {
    const {
      level,
      content,
      alignment,
      classes
    } = this.props;
    
    const classNames = `Heading Heading--${ level } ${ classnames( { classes } ) }`

    return (
      <div 
        className={ classNames }
        role='heading'
        aria-level={ level }
        style={{ textAlign: alignment }}
      >
        { content }
      </div>
    )
  }
}