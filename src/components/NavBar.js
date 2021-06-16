import { IoPersonCircleOutline, IoCartOutline } from 'react-icons/io5';

import React from 'react';

import { Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';

import { Link, useHistory } from 'react-router-dom';

import { StyleSheet, css } from 'aphrodite';

import icon from '../assets/icon.svg';
import { useAuth } from '../contexts/AuthContext';

const styles = StyleSheet.create({
  brandIcon: {
    margin: '0px',
    padding: '2px 2px',
    backgroundColor: '#FF8C00',
    borderRadius: '25%  0 0 25%',
  },
  brandName: {
    fontFamily: `'Do Hyeon', sans-serif`,
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: '#FF8C00',
    padding: '0 0.25rem',
  },
  brandCoolStuff: {
    height: '38px',
    width: '3rem',
    background: 'linear-gradient(to right, #FF8C00, transparent )',
  },
});

const NavBar = () => {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push('/login');
    } catch {
      throw new Error('Unknown logout error occured.');
    }
  };

  return (
    <Navbar bg='dark' variant='dark' expand='md'>
      <Navbar.Brand as={Link} to='/' className='p-0 d-flex'>
        <img
          alt=''
          src={icon}
          width='38'
          height='38'
          className={`d-inline-block align-top ${css(styles.brandIcon)}`}
        />
        <span className={css(styles.brandName)}>BIKE-SHOP</span>
        <div className={css(styles.brandCoolStuff)}></div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link as={Link} to='/browse'>
            Browse
          </Nav.Link>
          <Nav.Link as={Link} to='/custom-shop'>
            <nobr>Custom Shop</nobr>
          </Nav.Link>
        </Nav>
        <Nav className='w-100 justify-content-end'>
          {currentUser ? (
            <>
              <NavItem eventkey={1}>
                <Nav.Link as={Link} to='/cart'>
                  <IoCartOutline size='1.5rem' className='text-secondary' />
                  <span className='text-secondary font-weight-bold'>Cart</span>
                </Nav.Link>
              </NavItem>
              <NavDropdown
                title={
                  <>
                    <IoPersonCircleOutline
                      size='1.5rem'
                      className='text-secondary'
                    />
                    <span className='text-secondary font-weight-bold'>
                      {currentUser?.email}
                    </span>
                  </>
                }
              >
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <NavItem>
              <Nav.Link as={Link} to='/login'>
                Sing In
              </Nav.Link>
            </NavItem>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
