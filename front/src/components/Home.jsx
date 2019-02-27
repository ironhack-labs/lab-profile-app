import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Calendar from './Calendar/Calendar';

export default class Home extends Component {
  render() {
    return (
      <div>
          <div>
          <Link to='/projects' style={{ textDecoration: 'none' }}>Pidenos Cita</Link>
          </div>
         <Calendar/>

      </div>
    )
  }
}
