import React, { Component } from 'react'
import {Link } from "react-router-dom";

export default class Button extends Component {
  constructor(){
      super();
  }
  render() {
    return (this.props.url) ? (
      <div>
        <Link to={this.props.url}><button>{this.props.children}</button></Link>
      </div>
    ): <div><button type={this.props.type}>{this.props.children}</button></div>
  }
}
