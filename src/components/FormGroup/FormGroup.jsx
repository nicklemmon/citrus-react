import React from 'react';
import classnames from 'classnames';

import './FormGroup.css';

export default class FormGroup extends React.Component {
  constructor( props ) {
    super( props )

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind( this )
  }

  handleChange( e ) {
    this.setState( {
      value: e.target.value
    })
  }

  render() {
    const {
      id,
      label,
      type,
      placeholder,
      classes
    } = this.props;

    const calculatedClassNames = `FormGroup-input FormGroup-input--${ type } ${ classnames( { classes } ) }`;
    
    return (
      <div className='FormGroup'>
        <label 
          className='FormGroup-label' 
          htmlFor={ id }
        >
          { label }
        </label>

        { type === 'textarea' ? (
          <textarea
            className={ calculatedClassNames }
            id={ id }
            name={ id }
            type={ type }
            placeholder={ placeholder }
            onChange={ this.props.handleChange || this.handleChange }
            value={ this.props.value || this.state.value }
          ></textarea>
        ) : (
          <input
            className={ calculatedClassNames }
            id={ id }
            name={ id }
            type={ type }
            placeholder={ placeholder }
            onChange={ this.props.handleChange || this.handleChange }
            value={ this.props.value || this.state.value }
          />
        )}
        
      </div>
    )
  }
}