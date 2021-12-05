import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import '../App.css';
import ChampionnatDriver from '../Components/ChampionnatDriver';

export default {
  title: 'ChampionnatDriver',
};

export const text = () => <div className="graphCourse"><br /><h2>Course aux points</h2><ChampionnatDriver /></div>;

export const emoji = () => (
  <div className="graphCourse"><br /><h2>Course aux points</h2><ChampionnatDriver /></div>
);
