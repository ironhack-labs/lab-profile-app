import React, { Component } from 'react'
import "./Button.css"

export default class Button extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <React.Fragment>
                <button className="button" onClick="">{this.props.children}</button>
            </React.Fragment>
        )
    }
}
