import React, { Component, Fragment } from 'react';
import './style.css';
import Image from "react-bootstrap/Image";


class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Image src="/images/oval-bg.png" fluid className="center" />
      </Fragment>
    )
  }
}

export default HomePage;
