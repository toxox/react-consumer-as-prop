import React, { Component } from "react";

export default class Select extends Component {
  static defaultProps = {
    Consumer: React.createContext({ options: [], isFetching: false }).Consumer
  };

  render() {
    const { Consumer } = this.props;
    return (
      <Consumer>
        {({ options, isFetching }) => {
          if (isFetching) return <p>Very cool spinner...</p>;
          return (
            <select>
              {options.map(({ id, value }) => {
                return (
                  <option key={id} value={value}>
                    {value}
                  </option>
                );
              })}
            </select>
          );
        }}
      </Consumer>
    );
  }
}
