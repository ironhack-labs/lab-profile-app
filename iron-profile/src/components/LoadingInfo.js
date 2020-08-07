import React, {Component} from 'react';

export class LoadingInfo extends Component {
    render() {
        return (
            <div className='loader'>
                <h1>Uploading data...</h1>
                <div>
                    <img
                        src='https://media.giphy.com/media/MDrmyLuEV8XFOe7lU6/giphy.gif'
                        alt='loading'/>
                </div>
                <br/>
                <h4>
                    Please, wait until we finish posting your picture
                </h4>
            </div>
        );
    }
}

export default LoadingInfo;
