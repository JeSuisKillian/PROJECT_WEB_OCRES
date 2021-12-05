import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import Formula from '../Components/Formula';

export default {
  title: 'Formula',
};

export const text = () => <Formula></Formula>;

export const emoji = () => (
  <Formula onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Formula>
);
