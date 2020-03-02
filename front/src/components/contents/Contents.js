import React, { Component } from 'react';
import Container from "../Container"

class Contents extends Component {
  render(){
    const style = { width: '100vw', height: '100vh', backgroundColor: 'black' };
    const imgArray = new Array(50).fill(
      'https://axiomoptics.com/wp-content/uploads/2019/08/placeholder-images-image_large.png'
    );
    
  return (
    <div style={style}>
      <Container renderMore={6} imgArray={imgArray}/>
    </div>
  );
}
}

export default Contents;