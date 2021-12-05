import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import '../App.css';
import NotreApiF1 from '../Components/NotreApiF1';

export default {
  title: 'NotreApiF1',
};

export const Affichage = () => (<div className="graphApi"><br /><h2>Notre API</h2><NotreApiF1 /></div>);
