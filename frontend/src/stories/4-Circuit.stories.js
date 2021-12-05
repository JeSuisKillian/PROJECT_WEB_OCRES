import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import Circuit from '../Components/Circuit';

export default {
  title: 'Circuit',
};

export const text = () => <Circuit></Circuit>;

export const emoji = () => (
  <Circuit onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Circuit>
);
