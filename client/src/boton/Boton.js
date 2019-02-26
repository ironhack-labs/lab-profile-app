import React, { Component } from 'react'

export default class Boton extends Component {
  render() {
    return (
    <button className={this.props.className} onClick={this.props.evento}>{this.props.title}</button>
    )
  }
}
