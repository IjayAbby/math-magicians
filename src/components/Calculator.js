import React from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(obj, buttonName) {
    this.setState({ result: calculate(obj, buttonName) });
  }

  render() {
    const { result } = this.state;
    let output = 0;
    if (Object.keys(result).length === 0 || (result.total === null
      && result.next === null
      && result.operation === null)) {
      output = 0;
    } else {
      output = result.next !== null ? result.next : result.total;
    }

    return (
      <div className="container">
        <div className="display">
          { output }
        </div>
        <div className="calculator grid-container">
          <Button buttonName="AC" onClick={this.handleClick} calcObject={result} />
          <Button buttonName="+/-" onClick={this.handleClick} calcObject={result} />
          <Button buttonName="&#37;" onClick={this.handleClick} calcObject={result} />
          <Button buttonName="&divide;" buttonClass="orange" onClick={this.handleClick} calcObject={result} />

          <Button buttonName="7" onClick={this.handleClick} calcObject={result} />
          <Button buttonName="8" onClick={this.handleClick} calcObject={result} />
          <Button buttonName="9" onClick={this.handleClick} calcObject={result} />
          <Button buttonName="x" buttonClass="orange" onClick={this.handleClick} calcObject={result} />

          <Button buttonName="4" onClick={this.handleClick} calcObject={result} />
          <Button buttonName="5" onClick={this.handleClick} calcObject={result} />
          <Button buttonName="6" onClick={this.handleClick} calcObject={result} />
          <Button buttonName="-" buttonClass="orange" onClick={this.handleClick} calcObject={result} />

          <Button buttonName="1" onClick={this.handleClick} calcObject={result} />
          <Button buttonName="2" onClick={this.handleClick} calcObject={result} />
          <Button buttonName="3" onClick={this.handleClick} calcObject={result} />
          <Button buttonName="+" buttonClass="orange" onClick={this.handleClick} calcObject={result} />

          <Button buttonName="0" buttonClass="zero" onClick={this.handleClick} calcObject={result} />
          <Button buttonName="." onClick={this.handleClick} calcObject={result} />
          <Button buttonName="=" buttonClass="orange" onClick={this.handleClick} calcObject={result} />
        </div>
      </div>
    );
  }
}

export default Calculator;
