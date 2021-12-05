import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import '../App.css';
import LastResult from '../Components/LastResult';

export default {
  title: 'LastResult',
};

export const Affichage = () => (<div className="graphmodule graphmodule-formula"><br /><h2>Derniers résultats</h2><LastResult /></div>);

