import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {Route, Redirect} from 'react-router-dom';
import './App.css';
import {Authentication, Login, Register, Home} from '../src/scenes';


function App() {
  return (
    <div>
      {/* <header className="POS-YFCC-RIAU-header"> */}
      <Router>
          <Switch>
              <Redirect exact from="/" to="/login"/>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register}/>
              <Authentication>
                <Route path="/home" component={Home}/>
              </Authentication>
          </Switch>
        </Router>
        {/* <Router>
          <Route path="/home" component={Home}/>
        </Router> */}
        
        
      {/* </header> */}


    </div>
  );
}

export default App;
