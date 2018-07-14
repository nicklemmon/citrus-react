import React from 'react';
import classnames from 'classnames';

import Heading from '../Heading/Heading.jsx';
import Alert from '../Alert/Alert.jsx';

import './Card.css';

class Card extends React.Component {
  constructor( props ) {
    super( props )
    
    this.state = {
      hasAlert: false,
      alertType: '',
      alertContent: ''
    }
  }
  
  render() {
    const {
      classes,
      headingLevel,
      headingContent,
      metaContent,
      footerContent
    } = this.props;

    const calculatedClassNames = `Card ${ classnames( { classes } ) }`;
    const hasAlert = this.props.hasAlert || this.state.hasAlert;
    const alertType = this.props.alertType || this.state.alertType;
    const alertContent = this.props.alertContent || this.state.alertContent;

    return (
      <div className={ calculatedClassNames } role='region'>
        { headingContent &&
          <div className='Card-header'>
            <Heading
              classNames='Card-heading'
              content={ headingContent }
              level={ headingLevel }
            />

            <span className='Card-meta'>
              { metaContent }
            </span>
          </div>
        }

        <div className='Card-content'>
          { hasAlert &&
            <Alert
              classNames='Card-alert'
              type={ alertType }
              content={ alertContent }
            />
          }

          { this.props.children }
        </div>

        { footerContent &&
          <div className='Card-footer'>
            { footerContent }
          </div>
        }
      </div>
    )
  }
}

export default Card