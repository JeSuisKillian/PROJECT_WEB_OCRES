import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import '../App.css';
import Graphique from '../Components/Graphique';

export default {
  title: 'Graphique',
};

export const Affichage = () => (<div className="grapheBeau"><br /><h2>Graphe de la rivalité</h2><Graphique /></div>);
