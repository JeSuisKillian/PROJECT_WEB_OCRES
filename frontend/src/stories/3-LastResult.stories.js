import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import LastResult from '../Components/LastResult';

export default {
  title: 'LastResult',
};

export const text = () => <LastResult></LastResult>;

export const emoji = () => (
  <LastResult onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </LastResult>
);
