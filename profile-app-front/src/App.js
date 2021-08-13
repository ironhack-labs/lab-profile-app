
import './App.css';
import Router from './app/navigation/Routes';
import {AppCtxProv} from './app/hooks/context'

function App() {
  return (
    <div >
    <AppCtxProv >
      <Router/>
      </AppCtxProv>
      </div>
   
  );
}

export default App;
