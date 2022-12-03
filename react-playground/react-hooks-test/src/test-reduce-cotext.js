import React, { createContext, useReducer, useContext } from "react";
// 创建 context
const ColorContext = createContext({});
// reducer
const UPDATE_COLOR = "UPDATE_COLOR"
const reducer = (state, action) => {
  console.log(11, state, 'action', action)
  switch (action.type) {
    case UPDATE_COLOR:
      return action.color
    default:
      return state
  }
}
export const Color = props => {
  const [color, dispatch] = useReducer(reducer, 'blue')
  console.log(222, color, dispatch)
  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      {props.children}
    </ColorContext.Provider>
  );
};


const Buttons = props => {
  const { dispatch } = useContext(ColorContext);
  return (
    <React.Fragment>
      <button
        onClick={() => {
          dispatch({ type: UPDATE_COLOR, color: "red", a: 123 });
        }}
      >
        红色
      </button>
      <button
        onClick={() => {
          dispatch({ type: UPDATE_COLOR, color: "yellow", a: 123456 });
        }}
      >
        黄色
      </button>
    </React.Fragment>
  );
};

const ShowArea = (props) => {
  const res = useContext(ColorContext);
  console.log('1111', res);
  const { color } = res
  return (
    <div style={{ color: color }}>字体颜色展示为blue</div>
  )
}

export function Test () {
  return (
    <div className="App">
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </div>
  );
}
