import React, {useContext} from "react";


const themes = {
  light: {
    foreground: "red",
    background: "red"
  },
  dark: {
    foreground: "blue",
    background: "blue"
  }
};

// 主题context
//该Hook接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件

//  的 <MyContext.Provider> 的 value prop 决定。

const ThemeContext = React.createContext(themes.light);
console.log('1111', ThemeContext)

export function Container() {
  // 这里的value值改变，useContext包裹的值也会改变
  const test = {a:1}
  return (
    <ThemeContext.Provider value={test}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  console.log('props', props)
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  // 上层最近的Provider的value属性的值
  const theme = useContext(ThemeContext);
  console.log('useContext', theme)
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}