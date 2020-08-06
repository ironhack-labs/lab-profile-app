import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Homepage extends Component {
    render() {
        return (
            <div className="mainDiv container">
                <div className="row">
                    <div className="col-6 info-div">
                        <h4>IronProfile</h4>
                        <p>Today we will create an app with authoritation, adding some cool styles</p>
                        <div className="btn-div">
                            <Link to="/login"><button className="btn btn-logs">Login</button></Link>
                            <Link to="/signup"><button className="btn btn-logs">Signup</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
