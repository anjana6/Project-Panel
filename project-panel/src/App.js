import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Navbar from './components/layout/Navbar';

import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

import {useSelector} from 'react-redux';
import {isLoaded} from 'react-redux-firebase';

const AuthIsLoaded = ({children}) => {
  const auth = useSelector(state => state.firebase.auth);
  if(!isLoaded(auth)) return <div>Loading...</div>
  return children;
}


function App() {
  return (
    <Router>
      <AuthIsLoaded>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/create' component={CreateProject}/>
        </Switch>
      </div>
      </AuthIsLoaded>
    </Router>
    
  );
}

export default App;
