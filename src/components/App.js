import { React } from 'react';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

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
            <Route path='/home' render={() => <HomePage />} />
            <Route path='/login' render={() => <LoginPage />} />
            <Route path='/browse' render={() => <BrowsePage />} />
            <Route path='/bike-builder' render={() => <BikeBuilderPage />} />
            {/* <Route path='*'>
              <Redirect to='/home' />
            </Route> */}
            <FooterBar />
          </div>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
