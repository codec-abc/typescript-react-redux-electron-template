import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }
export interface HelloState { count : number}

export class Hello extends React.Component<HelloProps, HelloState> 
{
    constructor(props : HelloProps) 
    {
        super(props);
        this.state = 
        {
            count: 0
        };
    }

    private onClickCountUp() : void
    {
        this.setState
        (
            {
                count: this.state.count + 1
            }
        )
    }

    private onClickCountDown() : void
    {
        this.setState
        (
            {
                count: this.state.count - 1
            }
        )
    }

    render() 
    {
        return( 
            <div>
                <p>Hello from {this.props.compiler} and {this.props.framework}! </p>
                <h1>{this.state.count}</h1>
                <button onClick={this.onClickCountUp.bind(this)}>Count Up</button>
                <button onClick={this.onClickCountDown.bind(this)}>Count Down</button>
            </div>);
    }
}