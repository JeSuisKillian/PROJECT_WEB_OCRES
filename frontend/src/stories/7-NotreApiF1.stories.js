import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import NotreApiF1 from '../Components/NotreApiF1';

export default {
  title: 'NotreApiF1',
};

export const text = () => <NotreApiF1></NotreApiF1>;

export const emoji = () => (
  <NotreApiF1 onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </NotreApiF1>
);
