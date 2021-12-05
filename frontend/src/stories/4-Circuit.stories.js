import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import '../App.css';
import Circuit from '../Components/Circuit';

export default {
  title: 'Circuit',
};

export const text = () => <div className="graphmodule"><br /><h2>Informations sur le prochain circuit</h2><Circuit /></div>;

export const emoji = () => (
  <div className="graphmodule"><br /><h2>Informations sur le prochain circuit</h2><Circuit /></div>
);
