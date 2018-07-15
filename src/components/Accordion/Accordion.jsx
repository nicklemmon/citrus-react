import React from 'react';
import classnames from 'classnames'
import FaAngleRight from 'react-icons/lib/fa/angle-right';

import './Accordion.css';

export default class Accordion extends React.Component {
  constructor( props ) {
    super( props );

    this.open = this.open.bind( this );
    this.close = this.close.bind( this );
    this.toggle = this.toggle.bind( this );

    this.state = {
      isOpen: false
    }
  }

  open() {
    this.setState({
      isOpen: true
    })
  }

  close() {
    this.setState({
      isOpen: false
    })
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const {
      triggerContent,
      children
    } = this.props;

    const isOpen = this.props.isOpen || this.state.isOpen;

    return (
      <div className={ `Accordion ${ classnames( { isOpen } ) }` }>
        <button className='Accordion-trigger' onClick={ this.toggle } aria-expanded={ isOpen }>
          <FaAngleRight className={ `Accordion-icon ${ classnames( { isOpen } ) }` }/>

          { triggerContent }
        </button>

        <div className={ `Accordion-content ${ classnames( { isOpen } ) }` }>
          { children }
        </div>
      </div>
    )
  }
}