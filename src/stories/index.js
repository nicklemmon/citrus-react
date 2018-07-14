import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import '../index.css';
import Button from '../components/Button/Button';

storiesOf( 'Welcome', module ).add( 'to Storybook', () => <Welcome showApp={ linkTo( 'Button' ) } /> );

storiesOf( 'Button', module )
  .add( 'with text', () => <Button content='Click Me!'/> )
  .add( 'with primary type', () => <Button type='primary' content='Primary!' /> )
  .add( 'with secondary type', () => <Button type='secondary' content='Secondary!' /> )
  .add( 'with full width style', () => <Button fullWidth={ true } content='Full width!' /> )
  .add( 'with link', () => <Button linkTo='/' content='With Link' /> )
