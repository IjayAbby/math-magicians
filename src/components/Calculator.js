import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator grid-container">
        <div className="display grid-item">0</div>
        <button className="button grid-item" type="button">AC</button>
        <button className="button grid-item" type="button">+/-</button>
        <button className="button grid-item" type="button">%</button>
        <button className="button grid-item orange" type="button">/</button>

        <button className="button grid-item" type="button">7</button>
        <button className="button grid-item" type="button">8</button>
        <button className="button grid-item" type="button">9</button>
        <button className="button grid-item  orange" type="button">x</button>

        <button className="button grid-item" type="button">4</button>
        <button className="button grid-item" type="button">5</button>
        <button className="button grid-item" type="button">6</button>
        <button className="button grid-item orange" type="button">-</button>

        <button className="button grid-item" type="button">1</button>
        <button className="button grid-item" type="button">2</button>
        <button className="button grid-item" type="button">3</button>
        <button className="button grid-item orange" type="button">+</button>

        <button className="button grid-item zero" type="button">0</button>
        <button className="button grid-item" type="button">.</button>
        <button className="button grid-item orange" type="button">=</button>
      </div>
    );
  }
}

export default Calculator;
