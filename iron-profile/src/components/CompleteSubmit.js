import React, {Component} from "react";

class CompleteSubmit extends Component {
    render() {
        return (
            <div className='loader'>
                <h1>Picture Submited!</h1>
                <div>
                    <img
                        src="https://media.giphy.com/media/PijzuUzUhm7hcWinGn/giphy.gif"
                        alt="check"/>
                </div>
                <br/>
                <h4>Your profile is now updated!</h4>
            </div>
        );
    }
}

export default CompleteSubmit;
