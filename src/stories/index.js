import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import { Router } from 'react-router';

import '../index.css';
import Button from '../components/Button/Button';
import Heading from '../components/Heading/Heading';
import Alert from '../components/Alert/Alert';

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


