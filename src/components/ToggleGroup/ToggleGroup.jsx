import React from 'react';
import classNames from 'classnames';

import './ToggleGroup.css';

export default class ToggleGroup extends React.Component {
  constructor( props ) {
    super( props )

    this.state = {
      activeIndex: null
    }

    this.activateButton = this.activateButton.bind( this );
  }

  activateButton( buttonIndex ) {
    this.setState({
      activeIndex: buttonIndex
    })
  }

  render() {
    const {
      id,
      className,
      type,
      buttons
    } = this.props;

    const classes = classNames( 'ToggleGroup', className, {
      'ToggleGroup--radio': type === 'radio',
      'ToggleGroup--checkbox': type === 'checkbox',
    });

    return (
      <div
        id={ id }
        className={ classes }
        role={ type === 'radio' ? 'radiogroup' : undefined }
      >
        { Object.keys( buttons ).map( ( button, index ) => {
            const activeIndex = this.state.activeIndex;

            const buttonClasses = classNames( 'ToggleGroup-button', {
              'is-active': activeIndex === index
            });

            return (
              <div
                className={ buttonClasses }
                tabIndex={ type === 'radio' ? '-1' : '0' }
                id={ `${id}-${index}` }
                key={ `${id}-${index}` }
                role={ type === 'radio' ? 'radio' : 'checkbox' }
                aria-checked={ activeIndex === index ? 'true' : 'false' }
                onClick={ () => this.activateButton( index ) }
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