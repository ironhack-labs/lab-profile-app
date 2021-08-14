import {Switch, Route} from 'react-router-dom';
import {Auth, Home, Profile, Verify} from '../views'

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Auth}/>
        <Route exact path="/signup" component={Auth}/>
        <Route exact path="/verify-email" component={Verify}/>
        <Route exact path="/confirmation-page" component={Verify}/>
        <Route exact path="/profile" component={Profile}/>
    </Switch>
)

export default Router