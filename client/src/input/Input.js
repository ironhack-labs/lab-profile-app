import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <label> {this.props.label}
    <input type="text" onChange={this.props.handler}/>
    </label>
    )
  }
}
