import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import ChampionnatDriver from '../Components/ChampionnatDriver';

export default {
  title: 'ChampionnatDriver',
};

export const text = () => <ChampionnatDriver></ChampionnatDriver>;

export const emoji = () => (
  <ChampionnatDriver onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </ChampionnatDriver>
);
