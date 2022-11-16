
import React from 'react'
import ReactDOM from 'react-dom/client'

export class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.state.a = 'a'
        this.state.b = 'b'
        // 为了在回调中使用 `this`，这个绑定是必不可少的
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('handleClick', this)
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        this.setState({ a: this.state.a + '1' })
        this.setState({ b: this.state.b + '2' })
        this.setState(function () {
            console.log(111, arguments)
            console.log(222, this)
        })
    }

    render() {
        return (

            <div>
                <button onClick={() => { this.handleClick() }}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <div>a: {this.state.a}</div>
                <div>b: {this.state.b}</div>
            </div>
        );
    }
}