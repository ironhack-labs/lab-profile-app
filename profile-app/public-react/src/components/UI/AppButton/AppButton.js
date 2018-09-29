import React from 'react';

const appButton =  (props) => {
    const { bg, children, clicked  } = props;

    const styles = bg === 'green' ? (
        {
            background: 'rgb(183, 229, 186)',
            color: 'black',
            padding: '10px',
            outline: 'none',
            width: '200px',
            cursor: 'pointer',
            border: 'none',
            margin: '10px',
            borderRadius: '7px'
        }
    ) : (
        {
            background: 'white',
            color: 'grey',
            padding: '10px',
            outline: 'none',
            width: '200px',
            cursor: 'pointer',
            border: 'none',
            margin: '10px',
            borderRadius: '7px'
        }
    );

    return (
        <button style={ styles } onClick={ clicked ? clicked : null }>{ children }</button>
    );
};

export default appButton;