import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import { Router } from 'react-router';

import '../index.css';
import Button from '../components/Button/Button';
import ButtonWrapper from '../components/ButtonWrapper/ButtonWrapper';
import Heading from '../components/Heading/Heading';
import Alert from '../components/Alert/Alert';
import AlertDismissable from '../components/Alert/AlertDismissable.jsx';
import Card from '../components/Card/Card';
import FormGroup from '../components/FormGroup/FormGroup';
import Modal from '../components/Modal/Modal.jsx';
import ModalLauncher from '../components/Modal/ModalLauncher.jsx';
import Accordion from '../components/Accordion/Accordion.jsx';
import Popover from '../components/Popover/Popover.jsx';
import PopoverItem from '../components/Popover/PopoverItem.jsx';

storiesOf( 'Welcome', module ).add( 'to Storybook', () => <Welcome showApp={ linkTo( 'Button' ) } /> );

storiesOf( 'Button', module )
  .add( 'with text', () => <Button content='Click Me!'/> )
  .add( 'with primary type', () => <Button type='primary' content='Primary!' /> )
  .add( 'with secondary type', () => <Button type='secondary' content='Secondary!' /> )
  .add( 'with full width style', () => <Button fullWidth={ true } content='Full width!' /> )
  .add( 'with link', () => {
    return (
      <Router>
        <Button linkTo={ undefined } content='With Link' />
      </Router>
    )
  } )

storiesOf( 'Heading', module )
  .add( 'with level 1', () => <Heading level='1' content='Heading level 1' /> )
  .add( 'with level 2', () => <Heading level='2' content='Heading level 2' /> )
  .add( 'with level 3', () => <Heading level='3' content='Heading level 3' /> )
  .add( 'with level 4', () => <Heading level='4' content='Heading level 4' /> )
  .add( 'with level 5', () => <Heading level='5' content='Heading level 5' /> )
  .add( 'with level 6', () => <Heading level='6' content='Heading level 6' /> )

storiesOf( 'Alert', module )
  .add( 'with type error', () => <Alert type='error' content='This is an error alert.' /> )
  .add( 'with type success', () => <Alert type='success' content='This is an success alert.' /> )
  .add( 'with type attention', () => <Alert type='attention' content='This is an attention alert.' /> )
  .add( 'with type info', () => <Alert type='info' content='This is an info alert.' /> )
  .add( 'is dismissable', () => <AlertDismissable type='error' content='This is a dismissable alert'/> )

storiesOf( 'Card', module )
  .add( 'with headingLevel and headingContent', () => <Card headingLevel='5' headingContent='Example Heading Content' /> )
  .add( 'with metaContent', () => <Card headingLevel='5' headingContent='Example Heading Content' metaContent='07/04/1776' /> )
  .add( 'with footerContent', () => <Card footerContent='Example footer content' /> )
  .add( 'with child elements', () => {
    return (
      <Card
        headingContent='Example Heading Content'
        headingLevel='5'
      >
        <p>I am a child element!</p>

        <ButtonWrapper>
          <Button
            type='primary'
            content='Continue'
          />

          <Button
            type='secondary'
            content='Cancel'
          />

          <Button
            type='tertiary'
            content='Back'
          />
        </ButtonWrapper>
      </Card>
    )
  })

storiesOf( 'FormGroup', module )
  .add( 'with a placeholder', () => {
    return (
      <FormGroup
        type='text'
        label='First Name'
        id='first-name'
        placeholder='i.e., Jim'
        classes='example-class'
      />
    )
  })
  .add( 'with an error message', () => {
    return (
      <FormGroup
        type='text'
        label='First Name'
        id='first-name'
        classes='example-class'
        errorMsg='You made a mistake!'
      />
    )
  })

storiesOf( 'Modal', module )
  .add( 'with no child elements', () => <Modal id='example-modal' heading='Example Modal' /> )
  .add( 'with child elements', () => {
    return (
      <Modal
        id='example-modal-2'
        heading='Example Modal with Child Elements'
      >
        <p>Some modal content!</p>

        <ButtonWrapper>
          <Button
            type='primary'
            content='OK'
          />

          <Button
            type='secondary'
            content='Cancel'
          />
        </ButtonWrapper>
      </Modal>
    )
  } )

storiesOf( 'ModalLauncher', module )
  .add( 'with text content', () => {
    return (
      <ModalLauncher
        heading='Example Modal with Text Content'
        content='Click to open modal'
        id='example-modal-with-text-content'
      >
        <p>Here is some text content.</p>
      </ModalLauncher>
    )
  } )
  .add( 'with buttons', () => {
    return (
      <ModalLauncher
        heading='Example Modal with Buttons'
        content='Click to open modal'
        id='example-modal-with-buttons'
        hasCTAs={ true }
        primaryButtonContent='OK'
        secondaryButtonContent='Cancel'
      >
        <p>Be careful what you decide.</p>
      </ModalLauncher>
    )
  } )

storiesOf( 'Accordion', module )
  .add( 'with some text content', () => <Accordion triggerContent='Accordion, yo'><p>Herro.</p></Accordion> )
  .add( 'open on mount', () => <Accordion triggerContent='Accordion open on mount' isOpen={ true }><p>Herro.</p></Accordion> )
  .add( 'with a minimal design', () => <Accordion type='minimal' triggerContent='Accordion with minimal design'><p>Herro.</p></Accordion> )

storiesOf( 'Popover', module )
  .add( 'with some generic children', () => {
    return (
      <Popover buttonContent='Open Popover'>
        <p>Boo!</p>
      </Popover>
    )
  })
  .add( 'with PopoverItem children', () => {
    return (
      <Popover buttonContent='Open Popover'>
        <PopoverItem content='Item 1'/>

        <PopoverItem content='Item 2'/>

        <PopoverItem content='Item 3'/>
      </Popover>
    )
  })