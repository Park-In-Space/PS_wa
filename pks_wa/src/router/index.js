import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

import Home from '../views/Home';
import HomeOwner  from '../views/HomeOwner';
import Login  from '../views/Login/LoginView';
import Register from '../views/Register/RegisterView';
import RegisterOwner from '../views/RegisterOwner';
import ParkingDetail from '../views/ParkingDetail/ParkingView';
import CreateParking from '../views/CreateParking';

class AppRouter extends Component {
    render() {
      return (
        <div className="container py-2">
          <Router >
                
                    <Switch> 
                        <Route path="/Inicio" component={ Home }/>
                        <Route exact path="/" component={ Login } />
                        <Route path="/InicioDueno" component={ HomeOwner } />
                        <Route path="/SignUp" component={ Register } />
                        <Route path="/SignUpOwner" component={ RegisterOwner } />
                        <Route path="/CreateParking" component={ CreateParking } />
                        <Route path="/ParkingDetail/:id" component={ ParkingDetail } />
                    </Switch>
              
            </Router>
        </div>
      );
    }
  }
        
            
    


export default AppRouter