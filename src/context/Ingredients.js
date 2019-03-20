import React, { Component } from 'react';

const Ingredients = React.createContext({});

export const IngredientsConsumer = Ingredients.Consumer;

const defaults = [
    {id: 1, value: 'Mango'},
    {id: 2, value: 'Cucumber'},
    {id: 3, value: 'Broken glass chips'},
    {id: 4, value: 'Potato'},
    {id: 5, value: 'Avocado'},
]

export class IngredientsProvider extends Component {
  state = {
    ingredients: [],
    isFetching: false,
  };

  componentDidMount() {
    this.setState({ isFetching: true });
    setTimeout(() => {
        // Simulating http request
        this.setState({ ingredients: defaults, isFetching: false })
    }, 700);
  }

  render() {
    return (
      <Ingredients.Provider
        value={{
          options: this.state.ingredients,
          isFetching: this.state.isFetching,
        }}
      >
        {this.props.children}
      </Ingredients.Provider>
    );
  }
}
