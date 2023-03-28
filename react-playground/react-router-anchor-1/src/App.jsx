// 使用示例：
import React from 'react'
import GuardRouter from './router/GuardRouter'
import Home from './views/home'
import News from './views/news'
import AboutUs from './views/about'
import {Route, Link } from "react-router-dom";

// 使用
// 决定路由是否跳转
function beforeRouterChange(prevLocation, curLocation, action, next, unBlock) {
    console.log( 'beforeRouterChange', prevLocation, curLocation, action, next, unBlock)
    if (1) {
        next(true) // 跳转路由
    } else {
        next(false) // 不跳转路由
    }
    // unBlock() // 取消阻塞
}

// 路由变化运行的函数
function handleRouterChange(prevLocation, curLocation, action, unListen) {
    // unListen() // 取消路由跳转监听
    console.log( 'handleRouterChange', prevLocation, curLocation, action,   )

}

function App() {
    return (
        <GuardRouter
            onBeforeEach={beforeRouterChange}
            onRouterChange={handleRouterChange}
        >
            <Link style={{'margin':'4px'}} to='/'>首页</Link>
            <Link style={{'margin':'4px'}} to='/news'>新闻页</Link>
            <Link style={{'margin':'4px'}} to='/aboutus'>关于我们</Link>
            <div className='page-container'>
                <Route exact path='/' component={Home} />
                <Route path='/news' component={News} />
                <Route path='/aboutus' component={AboutUs} />
            </div>
        </GuardRouter>
    )
}
export default App