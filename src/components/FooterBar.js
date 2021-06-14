import React from 'react';

import { StyleSheet, css } from 'aphrodite';

import { SocialIcon } from 'react-social-icons';
const styles = StyleSheet.create({
  footer: {
    minHeight: '56px',
    backgroundColor: 'black',
    display: 'flex',
  },
  author: {
    height: '100%',
  },
  siteInfo: {
    flexGrow: 1,
  },
});

const FooterBar = () => {
  return (
    <div className={css(styles.footer)}>
      <div className={css(styles.siteInfo)}>
        <div className='d-flex h-100 px-3 align-items-center text-info'>
          Michał Tkacz | 2021
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
