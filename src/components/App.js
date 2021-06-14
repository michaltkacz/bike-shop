import { React } from 'react';

import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import { AuthProvider } from '../contexts/AuthContext';
import '../styles/App.scss';

import FooterBar from './FooterBar';
import NavBar from './NavBar';

import BikeBuilderPage from './bikeBuilder/BikeBuilderPage';
import BrowsePage from './browse/BrowsePage';
import HomePage from './home/HomePage';
import LoginPage from './login/LoginPage';

const App = () => {
  return (
    <AuthProvider>
      <Router basename='/bike-shop'>
        <Switch>
          <div>
            <NavBar />
            <Route exact path='/home' render={() => <HomePage />} />
            <Route exact path='/login' render={() => <LoginPage />} />
            <Route exact path='/browse' render={() => <BrowsePage />} />
            <Route
              exact
              path='/bike-builder'
              render={() => <BikeBuilderPage />}
            />
            <Route path='*'>
              <Redirect push to='/home' />
            </Route>
            <FooterBar />
          </div>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
