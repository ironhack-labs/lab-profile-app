import React from "react"
//import { Route} from 'react-router-dom'
import Signup from "./auth/Signup"

import { Switch, Route } from 'react-router-dom'
const Home = () =>{
    return(
        <div className="home">
      <span className="btn-box">
      <article>
      <Switch>
  <Route exact path="/signup" component={Signup}/>
  
    </Switch>
    </article>
    <article>
       <button className="button">Sign up</button><br></br>
       <button className="button">Log in</button>
       </article>
       </span>
  

        </div>
    )

}




export default Home