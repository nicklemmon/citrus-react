import React from 'react';

import './Modal.css';

export default class Modal extends React.Component {
  constructor( props ) {
    super( props );

    this.modal = React.createRef();
  }

  componentDidMount() {
    this.modal.current.focus();
  }

  render() {
    const {
      id,
      heading
    } = this.props;

    return (
      <div className='Modal' id={ id } aria-labelledby={ `${id}-heading` } tabIndex='-1' ref={ this.modal }>
        <div className='Modal-content'>
          <div className='Modal-heading' id={ `${id}-heading` }>{ heading }</div>

          { this.props.children }
        </div>
      </div>
    )
  }
}