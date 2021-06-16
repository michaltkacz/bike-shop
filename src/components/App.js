import { React } from 'react';

import {
  Route,
  HashRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';

import { AuthProvider } from '../contexts/AuthContext';
import '../styles/App.scss';

import Footer from './Footer';
import NavBar from './NavBar';

import BrowsePage from './browse/BrowsePage';
import CartPage from './cart/CartPage';
import CustomShop from './customShop/CustomShop';
import HomePage from './home/HomePage';
import LoginPage from './login/LoginPage';
import PrivateRoute from './utils/PrivateRoute';
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Switch>
          <Route exact path='/' render={() => <HomePage />} />
          <Route exact path='/login' render={() => <LoginPage />} />
          <Route exact path='/browse' render={() => <BrowsePage />} />
          <Route exact path='/custom-shop' render={() => <CustomShop />} />
          <PrivateRoute path='/cart' children={<CartPage />} />
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
