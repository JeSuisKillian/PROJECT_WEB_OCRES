import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import '../App.css';
import Formula from '../Components/Formula';

export default {
  title: 'Formula',
};

export const Affichage = () => (<div className="graphmodule graphmodule-formula"><br /><h2>Liste des pilotes</h2><Formula /></div>);

export const emoji = () => (
  (<div className="graphmodule graphmodule-formula"><br /><h2>Liste des pilotes</h2><Formula /></div>)
);
