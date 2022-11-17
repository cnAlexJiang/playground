
import React from "react";

function CustomTextInput(props) {
    return (
        <div>
            <input ref={props.inputRef} />
        </div>
    );
}

export class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }
    log() {
        console.log(111, this)
    }
    render() {
        return (
            <div>
                <CustomTextInput inputRef={this.inputElement} />
                <button onClick={this.log.bind(this)}>loga</button>
            </div>
        );
    }
}