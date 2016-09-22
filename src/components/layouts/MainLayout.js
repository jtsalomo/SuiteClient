import HeaderLayout from './HeaderLayout';
import FooterLayout from './FooterLayout';

import React, {PropTypes} from 'react';

const MainLayout = ({children}) => {
  return (
    <div id='main' className='main-layout'>
      <HeaderLayout />
      <div id='content' className='content-layout'>
        {children}
      </div>
      <FooterLayout />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element
};

export default MainLayout;
