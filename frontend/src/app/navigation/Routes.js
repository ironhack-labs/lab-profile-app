import {Switch, Route} from 'react-router-dom';
import {Home} from '../views'

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={() => <h1>LOGIN PAGE</h1>}/>
        <Route exact path="/signup" component={() => <h1>SIGNUP PAGE</h1>}/>
        <Route exact path="/profile" component={() => <h1>PROFILE PAGE</h1>}/>
    </Switch>
)

export default Router