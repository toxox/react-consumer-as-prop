import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {IngredientsProvider} from './context/Ingredients'

const app = <IngredientsProvider><App /></IngredientsProvider>

ReactDOM.render(app, document.getElementById('root'));
