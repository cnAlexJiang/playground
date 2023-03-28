import { PureComponent } from 'react'
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'

let prevLocation, curLocation, curAction, unBlock

class _GuardRouterHelper extends PureComponent {
    componentDidMount() {
        unBlock = this.props.history.block((location, action) => {
            const prevLocation = this.props.location
            return JSON.stringify({
                prevLocation,
                location,
                action
            })
        })
        this.unListen = this.props.history.listen((location, action) => {
            const prevLocation = this.props.location
            // 约定属性 onRouterChange 传递一个函数，当页面跳转时处理一些事情
            this.props?.onRouterChange?.(prevLocation, curLocation, action, this.unListen)
        })
    }
    componentWillUnmount() {
        unBlock() // 取消阻塞
        this.unListen() // 取消路由变化的监听
    }
    render() {
        return null
    }
}
const GuardRouterHelper = withRouter(_GuardRouterHelper)

export default class GuardRouter extends PureComponent {
    handleRouterConfirm = (msg, next) => {
        const {
            prevLocation,
            location,
            action
        } = JSON.parse(msg)
        if (this.props.onBeforeEach && typeof this.props.onBeforeEach === 'function') {
            this.props.onBeforeEach?.(prevLocation, location, action, next, unBlock)
        } else {
            next(true) // 默认跳转
        }
    }
    render() {
        return (
            <Router getUserConfirmation={this.handleRouterConfirm}>
                <GuardRouterHelper onRouterChange={this.props.onRouterChange} />
                {this.props.children}
            </Router>
        )
    }
}