import React, { Component } from "react"
import PubSub from 'pubsub-js'
export default class Phone extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
        PubSub.subscribe("evt", (msg, data) => {
            console.log('msg', msg, data)
        })
    }

    render () {
        return (
            <div>
              phone
            </div>
        )
    }
}