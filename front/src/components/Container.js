import React from 'react';

import Column from './Column';
import Row from './Row';

function Container(props) {
  const style = {
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid black'
  };

  const columnImages = props.imgArray && props.imgArray.slice(0, 2);
  const rowImages = props.imgArray && props.imgArray.slice(2, props.imgArray.length);

  return (
    <div style={style}>
      <Column imgArray={columnImages}/>
      <Row renderMore={props.renderMore - 1} imgArray={rowImages}/>
    </div>
  );
}

export default Container;
