import React from 'react'
import ReactDOM from 'react-dom/client'


// import App from './App'
// import './index.css'


// demo1
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

// demo2
// const root = ReactDOM.createRoot(
//   document.getElementById('root')
// );
// const element = <h1>Hello, world</h1>;
// root.render(element);



// demo3

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const element = <App />;
// root.render(element);


// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }



// demo4
// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name} />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64'
//   }
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author} />
// );


// demo5

// const root = ReactDOM.createRoot(document.getElementById('root'));

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   root.render(<Clock date={new Date()} />);
// }

// setInterval(tick, 1000);

// root.render(<Clock />);




// DEMO5 
// function ShowContent(props) {
//   console.log('call render')
//   return <h1>content: {props.word} </h1>
// }


// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//     console.log('constructor')
//   }
//   componentDidMount() {
//     console.log('did mount')
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }
//   tick() {
//     this.setState({ date: new Date() })
//   }
//   componentWillUnmount() {
//     console.log('will unmount')
//     clearInterval(this.timerID);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//         <ShowContent word={this.state.date.toLocaleTimeString()} />
//       </div>
//     );
//   }
// }

// const App = (
//   <div>
//     <Clock />
//     <h2>adsdjskl</h2>
//   </div>
// )
import { Clock } from './components/test-state'
import { Toggle } from './components/test-event'
import { LoginControl, Page } from './components/test-condition-render'
import { NumberList } from './components/test-list-render'
import { NameForm, EssayForm, FlavorForm, Reservation } from './components/test-form'
const root = ReactDOM.createRoot(document.getElementById('root'));
const app = (
  <div>
    <Reservation />
  </div>
)
root.render(app);
