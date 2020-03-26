import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';


const HomePage = () => {

  return(
    <Container>
      <h1>IronProfile</h1>
      <p>Today we will create and app with authoritation, adding some cool styles (no way, haha!)</p>
        <Link to='/signup'>Sign up</Link> 
        <Link to='/login'>Log in</Link>
    </Container>
  );
}

export default HomePage;
