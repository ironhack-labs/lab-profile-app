import React, { Component } from 'react'
import Home from './Home'

export default class HomeContainer extends Component {
    state = {
        user: {}
    }

    render() {
        return (
            <div>
                <Home />
            </div>
        )
    }
}
