import React from 'react';

import { StyleSheet, css } from 'aphrodite';

import { SocialIcon } from 'react-social-icons';
import DatabasePush from './DatabasePush.js';

const styles = StyleSheet.create({
  footer: {
    minHeight: '56px',
    backgroundColor: 'black',
    display: 'flex',
  },
});

const FooterBar = () => {
  return (
    <div className={css(styles.footer)}>
      <div className='flex-grow-1'>
        <div className='d-flex h-100 px-3 align-items-center text-info'>
          Michał Tkacz | 2021 <DatabasePush />
        </div>
      </div>
      <div className='p-2'>
        <SocialIcon
          className='m-1'
          url='https://github.com/michaltkacz'
          label='github link'
        />
        <SocialIcon
          className='m-1'
          url='https://www.linkedin.com/in/tkacz-michal/'
          label='linkedin link'
        />
      </div>
    </div>
  );
};

export default FooterBar;
