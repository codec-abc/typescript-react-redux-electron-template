import * as React from "react";

export interface CounterProps 
{ 
  compiler : string, 
  framework : string, 
  onIncrement : () => { type: string; }, 
  onDecrement : () => { type: string; },
  value : number 
}

export interface CounterState { }

export class Counter extends React.Component<CounterProps, CounterState> 
{
  constructor(props : CounterProps) 
  {
    super(props);
  }

  render() 
  {
    return (
      <p>
        Clicked: {this.props.value} times !
        {' '}
        <button onClick={this.props.onIncrement}>
          +
        </button>
        {' '}
        <button onClick={this.props.onDecrement}>
          -
        </button>
      </p>
    )
  }
}