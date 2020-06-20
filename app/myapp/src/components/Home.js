import React, { Component, Fragment } from 'react'
// import ImagA from "../assets/1.png"
import News from './News'
import Phone from './Phone'
import axios from 'axios'
import {store} from '../redux/store'
import * as action from '../redux/action'

export default class Home extends Component {
    componentDidMount () {
        // this.ajaxfun()
        console.log('1111',this.props.match.params.id)

        console.log('2222', this.props.location.query)
        store.subscribe(() => {this.setState({
            num: store.getState()
        })})
    }
    ajaxfun = () => {
        axios.get('http://localhost:4000/arr').then((res) => {
            console.log('res', res)
        })
    }
    constructor(props) {
        super(props)
        this.state = {
            text: '默认值',
            num: store.getState()
        }
    }
    dataFun = (text) => {
        console.log('text', text)
        this.setState({
            text: text
        })
    }
    render () {
        return (
            <Fragment>
                <div>
                    hello world
                </div>
                <div>
                    hello world
                </div>
                {this.state.text}
                <News text="你好" fufun={this.dataFun}/>
                <Phone />
                {/* <img src={ImagA}/>

                <img src={require("../assets/1.png")}/> */}
                <div>
                    {this.state.num}
                    <button onClick={() => {store.dispatch(action.add(1))}}>点我加1</button>
                    <button onClick={() => {store.dispatch(action.del(1))}}>点我减1</button>

                </div>
            </Fragment>
            
        )
    }
}