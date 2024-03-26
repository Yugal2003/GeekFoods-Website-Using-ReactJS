import React from 'react'
import {Outlet} from 'react-router-dom';
// import HeaderSecation from '../component/HeaderSecation';
// import Footer from '../component/Footer';

const Layout = () => {
    return (
      <div>
          <ul>
            {/* <HeaderSecation/> */}
            <Outlet /> 
            {/* <Footer/> */}
          </ul>
      </div>
    );
  };

export default Layout