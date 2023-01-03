import React, { useEffect } from 'react'
import { Counter } from './features/counter/Counter'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory
} from "react-router-dom";


export default function App() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
  
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  function Home() {
    const history = useHistory()
    useEffect(() => {
      const block = history.block(() => {
      // 离开当前页面的时候 打印出拦截到了
      console.log('拦截到了')
   
      //todo 
      // 离开之前做什么操作
   
      // 确定返回离开页面
      return block()
      })
  }, [])  
    // return <Counter/>  ;
    return <h2>home</h2> ;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Topics() {
    let match = useRouteMatch();
  
    return (
      <div>
        <h2>Topics</h2>
  
        <ul>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>
  
        {/* The Topics page has its own <Switch> with more routes
            that build on the /topics URL path. You can think of the
            2nd <Route> here as an "index" page for all topics, or
            the page that is shown when no topic is selected */}
        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <h3>Please select a topic.</h3>
          </Route>
        </Switch>
      </div>
    );
  }
  
  function Topic() {
    let { topicId } = useParams<{topicId:  string}>();
    return <h3>Requested topic ID: {topicId}</h3>;
  }
  

