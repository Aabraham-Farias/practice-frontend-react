import React from 'react';

//views 
import Login from './views/login';
import Home from './views/Home';
import Signup from './views/Signup';

import{
BrowserRouter as Router, 
Switch,
Route,
Link
} from "react-router-dom";

//componentes
import Navigation from './components/Navigation';


function App() {
    return ( 
<React.Fragment>

<Router>
<Navigation/>
<Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route  exact path="/">
            <Home />
          </Route>
        </Switch>
</Router>
</React.Fragment>
    );
}

export default App;