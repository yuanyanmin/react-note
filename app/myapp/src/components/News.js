import React, { Component } from "react"
import PubSub from 'pubsub-js' // 同级传值
export default class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 123,
            ziText: 'ziText'
        }
    }
    fun() {
        this.setState({
            name: 321
        })
    }
    pubsub() {
        PubSub.publish("evt", this.state.name)
    }
    render () {
        return (
            <div>
                news
                {this.props.text}
                {this.state.name}
                <button onClick={this.fun.bind(this)}>点我修改</button>

                <br/>
                <button onClick={this.props.fufun.bind(this, this.state.ziText)}>点我发送数据</button>

                <button onClick={this.pubsub.bind(this)}>点我进行同级传值</button>
            </div>
        )
    }
}