import React, { Component } from 'react'
import './Page.scss'

export class Page extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return <div>{ this.props.children }</div>
    }
}