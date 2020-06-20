import React from 'react';
import './App.css';
import Home from './components/Home'
import {Route, Link, NavLink, Switch, Redirect, withRouter} from 'react-router-dom'
import { useState } from 'react';

// withRouter 高阶组件  history、location、match

// 监控路由的变化 
// props.history.listen((link) => {
//     link.pathname  // 切换路径
// })

// 编程式导航 
// props.history.push('/xxx')

// 路由传参

// params 方式传参
// 需要在路由规则中设置传递的接受参数
// 发送参数 直接在跳转路由后进行编写
// 接受 props.match.params.参数名
// 优点：刷新地址，参数依旧存在
// 缺点：只能传递字符串，并且，参数过多的时候 url 比较丑陋

// query 方式
// 1. 不需要在路由中进行传递参数的配置
// 2. 直接发送数据
// 3. 使用 this.props.location.query.xxx

// Hook 是 react 中16.8 新增的一个特性，主要是用来无状态组件 可以使用状态 在 react 开发中状态的管理是必不可少的，以前为了进行状态管理，需要使用类组件或者redux 等来管理

// 如果多个状态
// 1. 声明对象类型的状态
// 2. 多次声明

// redux JavaScript 提供的一个可预测性的状态容器
// 集中的管理 react 中多个组件的状态
// redux 是一个专门的状态管理库
// 需求场景
// 组件状态需要共享的时候
// 一个组件需要改变另外一个组件状态的时候
// 组件中的状态需要在人恶化地方都可以拿到

// 三大原则
// 1. 单一数据源 整个 react 中的状态都会被统一的管理到  store
// 2. state 是只读的 我们不能直接改变 state 而是通过触发 redux 中的特定方法来进行修改
// 3. 使用纯函数来执行修改操作 action 来改变 redux 中的 state

// 使用
// 下载 npm install --save redux


class App1 extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      text: '我是状态数据'
    }
  }
  render () {
    return (
      <div>
        hello---{this.state.text}
      </div>
    )
  }
}

// 可以使用 Hook 中的 useState 来进行实现
// useState 是来定义一个状态的，它与类组件的状态不同
// 函数组件的状态可以是对象也可以是基础类型数据
// useState 返回的是一个数组
// 第一个是当前的状态值，第二个是对象表明用于更改状态的函数
function App(props) {
  // let [val, setVal] = useState(0)

  let [val, setVal] = useState({
    vala: 0,
    valb: 1,
    valc: 2
  })

  // 多次申明
  let [vala, setVala] = useState(0)
  let [valb, setValb] = useState(1) 
  let [valc, setValc] = useState(2) 


  // console.log('props', props)

  props.history.listen((link) => {
    // console.log(link)
  })

  return (
    <div className="App">
      {/* <Home/> */}
      <div>
        <Link to="/home">点我去 Home</Link>
        <NavLink to="/home">点我去 Home</NavLink>

      </div>
      <Switch>
        {/* <Route path="/home/:id" component={Home}/> */}
        <Route path="/home" component={Home}/>


      </Switch>

      {/* <Redirect from="/" to="/home" exact></Redirect> */}

      {/* 编程式导航 */}
      <button onClick={() => {props.history.push('/home')}}>点我去home</button>

      {/* 路由传参 params*/}
      <NavLink to="/home/我是参数">点我去 Home</NavLink>

      {/* 路由传参 query*/}
      <NavLink to={{pathname: "/home", query: {name: '小明'}}}>点我去 Home</NavLink>


      <br/>

      {/* <div>
        使用数据；{val}
        <button onClick={() => {setVal(val+1)}}>点我进行数据修改</button>
      </div> */}

      <div>
        使用数据；{val.vala}---{val.valb}---{val.valc}
        <button>点我进行数据修改</button>
      </div>

      <div>
        使用数据:{vala} -- {valb} -- {valc}
        <button onClick={() => {setVala(vala+1)}}>点我进行数据修改</button>
      </div>
    </div>
  );
}

export default withRouter(App);
