import React from 'react';

function Column(props) {
  const style = {
    width: '30%',
    height: '100%',
    backgroundColor: 'green',
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column'
  };
const imgStyle={ border: '1px solid yellow', padding: '5px', width: '100%', height:'50%',
backgroundSize: 'cover',backgroundPosition: 'center' }

  return (
    <div style={style}>
      {props.imgArray &&
        props.imgArray.map(image =>  (
          <div 
          style={{...imgStyle,backgroundImage: `url(${image})`}}/>
          
        ))}
        
    </div>
  );
}

export default Column;
