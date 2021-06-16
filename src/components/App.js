import { React } from 'react';

import {
  Route,
  BrowserRouter as Router,
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
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <NavBar />
        <Switch>
          <Route path='/home' render={() => <HomePage />} />
          <Route path='/login' render={() => <LoginPage />} />
          <Route path='/browse' render={() => <BrowsePage />} />
          <Route path='/custom-shop' render={() => <CustomShop />} />
          <PrivateRoute path='/cart' children={<CartPage />} />
          <Route path='*'>
            <Redirect to='/home' />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;