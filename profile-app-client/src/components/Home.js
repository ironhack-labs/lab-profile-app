import React, {Component} from 'react';
import { Link } from 'react-router-dom';



class Home extends Component {
    constructor(props) {
        super(props);

    }
    
    render(){
        return (
    
            <div className='hero is-medium has-bg-img'>
            <div className='hero-body'>
                <div className="container">
                    <h1 className="title">
                        IronProfile
                    </h1>
                    <h2 className="subtitle">
                        Today we will create an app <br/>with with authoritation, adding <br/>
                        some cool styles!
                    </h2>
                </div>
            <div>
            <div className="is-grouped">
            <Link className='button is-primary' to={'/signup'}>Sign up</Link><br/><br/>
            <Link to={'/login'} className='button is-primary'>Log in</Link>
               </div>
            </div>
            </div>
                </div>
            
        );
    }
}

export default Home;