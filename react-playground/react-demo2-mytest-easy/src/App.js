import './App.css';
 import {Button1} from './components/test1'
 import {Button2} from './components/test2'
import {Counter} from './features/counter/Counter'
function App() {
  return (
    <div className="App">
      <header className="App-header">
          hello
          {/* <Button1/> */}
          <Counter/>
      </header>
    </div>
  );
}

export default App;
