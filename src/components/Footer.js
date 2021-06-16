import React from 'react';

import { StyleSheet, css } from 'aphrodite';

import { SocialIcon } from 'react-social-icons';

import { useAuth } from '../contexts/AuthContext';

import DatabaseAdmin from './DatabaseAdmin.js';

const styles = StyleSheet.create({
  footer: {
    minHeight: '56px',
    backgroundColor: 'black',
    display: 'flex',
  },
  socialIcon: {
    ':hover': {
      boxShadow: '0 0px 8px 0 #B18AFF',
      borderRadius: '50%',
      transition: 'transform 100ms ease-in-out',
      ':hover': {
        transform: 'scale(1.1, 1.1)',
      },
    },
  },
});

const Footer = () => {
  const { currentUser } = useAuth();
  return (
    <div className={css(styles.footer)}>
      <div className='flex-grow-1'>
        <div className='d-flex h-100 px-3 align-items-center text-info'>
          Michał Tkacz | 2021{' '}
          {currentUser?.email === 'admin@admin.com' && <DatabaseAdmin />}
        </div>
      </div>
      <div className='p-2'>
        <SocialIcon
          className={`m-1 ${css(styles.socialIcon)}`}
          url='https://github.com/michaltkacz'
          label='github link'
        />
        <SocialIcon
          className={`m-1 ${css(styles.socialIcon)}`}
          url='https://www.linkedin.com/in/tkacz-michal/'
          label='linkedin link'
        />
      </div>
    </div>
  );
};

export default Footer;
