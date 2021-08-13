import {Switch,Route} from "react-router-dom";
import {Auth,Profile} from "../views";

const Router = () => (
        <Switch>
            <Route exact path="/" component={()=><h1>Home</h1>}/>
            <Route exact path="/login" component={Auth}/>
            <Route exact path="/signup" component={Auth}/>
            <Route exact path="/profile" component={Profile}/>
        </Switch>


)

export default Router;