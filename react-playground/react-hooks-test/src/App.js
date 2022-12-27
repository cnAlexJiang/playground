// @ts-nocheck

import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";



class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    console.log(111, this.myRef)
  }
  render () {
    return <div ref={this.myRef} />;
  }
}
const FancyButton = React.forwardRef((props, ref) => {
  console.log(222, ref)
  return (
    <button ref={ref} className="FancyButton">
    {props.children}
  </button>
  )
});


const view = () => {
  const root = {
    'display': 'flex'
  }

  const ref = React.createRef();
  console.log(111, ref)
  return <div style={root}>
    <FancyButton ref={ref}>Click me!</FancyButton>;
  </div>
}

export default view