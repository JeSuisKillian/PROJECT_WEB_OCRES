import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import Graphique from '../Components/Graphique';

export default {
  title: 'Graphique',
};

export const text = () => <Graphique></Graphique>;

export const emoji = () => (
  <Graphique onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Graphique>
);
