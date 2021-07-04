import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { TimeCard } from './index';
import { Container } from '../../atoms/Container';

const story = storiesOf('TimeCard', module);

story.addDecorator(getStory => <Container>{getStory()}</Container>);

story.add('Standard', () => (
  <TimeCard
    selected={boolean('Selected', false)}
    time={text('Time,', '08:00')}
  />
));

story.add('Selected', () => (
  <TimeCard
    selected={boolean('Selected', true)}
    time={text('Time,', '08:00')}
  />
));
