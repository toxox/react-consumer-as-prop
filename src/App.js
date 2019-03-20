import React, { Component } from 'react';
import Select from './Select';
import { IngredientsConsumer } from './context/Ingredients';

class App extends Component {
  render() {
    return (
      <div style={{
        padding: '50px',
      }}>
        <Select Consumer={IngredientsConsumer} />
      </div>
    );
  }
}

export default App;
