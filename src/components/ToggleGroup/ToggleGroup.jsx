import React from 'react';
import classNames from 'classnames';

import './ToggleGroup.css';

export default class ToggleGroup extends React.Component {
  render() {
    const {
      id,
      className,
      type,
      buttons
    } = this.props;

    const classes = classNames( 'ToggleGroup', className, {
      'ToggleGroup--radio': type === 'radio',
      'ToggleGroup--checkbox': type === 'checkbox'
    });

    return (
      <div
        id={ id }
        className={ classes }
        role={ type === 'radio' ? 'radiogroup' : undefined }
      >
        { Object.keys( buttons ).map( ( button, index ) => {
            return (
              <div
                className='ToggleGroup-button'
                tabIndex={ type === 'radio' ? '-1' : '0' }
                id={ `${id}-${index}` }
                key={ `${id}-${index}` }
                role={ type === 'radio' ? 'radio' : 'checkbox' }
              >
                { buttons[button].content }
              </div>
            )
          })
        }
      </div>
    )
  }
}