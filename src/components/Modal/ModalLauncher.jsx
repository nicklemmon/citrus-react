import React from 'react';
import classnames from 'classnames';
import FaClose from 'react-icons/lib/fa/close';

import Modal from '../Modal/Modal.jsx';
import ButtonWrapper from '../ButtonWrapper/ButtonWrapper.jsx';
import Button from '../Button/Button.jsx';

export default class ModalButton extends React.Component {
  constructor( props ) {
    super( props )

    this.state = {
      isOpen: false
    }

    this.modalElement = React.createRef()

    this.open = this.open.bind( this )
    this.close = this.close.bind( this )
    this.handleKeyup = this.handleKeyup.bind( this )
    this.primaryButtonHandleClick = this.primaryButtonHandleClick.bind( this )
    this.secondaryButtonHandleClick = this.secondaryButtonHandleClick.bind( this )
  }

  open() {
    this.setState({
      isOpen: true
    })

    window.addEventListener( 'keyup', this.handleKeyup, false )
    document.querySelector( 'html' ).setAttribute( 'style', 'overflow-y: hidden; height: 100vh;' )
  }

  close() {
    this.setState({
      isOpen: false 
    })

    window.removeEventListener( 'keyup', this.handleKeyUp, false )
    document.querySelector( 'html' ).setAttribute( 'style', '' )
  }

  handleKeyup( e ) {
    if ( e.keyCode === 27 ) this.close()
  }

  primaryButtonHandleClick( e ) {
    const primaryButtonCloses = this.props.primaryButtonCloses
    const primaryButtonOnClick = this.props.primaryButtonOnClick

    if ( primaryButtonCloses ) this.close()

    if ( primaryButtonOnClick ) primaryButtonOnClick.call()
  }
  
  secondaryButtonHandleClick( e ) {
    const secondaryButtonCloses = this.props.secondaryButtonCloses
    const secondaryButtonOnClick = this.props.secondaryButtonOnClick

    if ( secondaryButtonCloses ) this.close()

    if ( secondaryButtonOnClick ) secondaryButtonOnClick.call()
    
  }

  render() {
    const {
      classes,
      content,
      id,
      heading,
      hasCTAs,
      primaryButtonContent,
      primaryButtonLinkTo,
      secondaryButtonContent,
      secondaryButtonLinkTo
    } = this.props;

    const calculcatedClassNames = `Modal-launcher ${ classnames( { classes } ) }`
    const isOpen = this.state.isOpen

    return (
      <React.Fragment>
        <button
          className={ calculcatedClassNames }
          aria-modal='dialog'
          title='Opens a dialog'
          onClick={ this.open }
        >
          { content }
        </button>

        { isOpen &&
          <Modal
            id={ id }
            heading={ heading }
            modalRef={ this.modalElement }
          >
            { this.props.children }

            { hasCTAs &&
              <ButtonWrapper>
                { primaryButtonContent &&
                  <Button
                    type='primary'
                    content={ primaryButtonContent }
                    onClick={ this.primaryButtonHandleClick }
                    linkTo={ primaryButtonLinkTo }
                  />
                }

                { secondaryButtonContent &&
                  <Button
                    type='secondary'
                    content={ secondaryButtonContent }
                    onClick={ this.secondaryButtonHandleClick }
                    linkTo={ secondaryButtonLinkTo }
                  />
                }
              </ButtonWrapper>
            }

            <button className='Modal-close' aria-label='Close dialog' onClick={ this.close }>
              <span aria-hidden='true'>
                <FaClose/>
              </span>
            </button>
          </Modal>
        }

        { isOpen &&
          <div className='Modal-overlay' onClick={ this.close }/>
        }
      </React.Fragment>
    )
  }
}