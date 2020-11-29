import react from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom"
import LayoutApp from './components/layoutApp'
import Home from './pages/home'

const Router = () => {
  return (
    <BrowserRouter>
      <LayoutApp>
        <Switch>
          <Route path='/' component={Home} exact/>
        </Switch>
      </LayoutApp>
    </BrowserRouter>
  )
}

export default Router