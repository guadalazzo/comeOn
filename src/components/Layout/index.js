import './styles.scss';
import React from 'react';

const Layout = ({ children, onClick }) => {
  return <article className="layout">{children}</article>;
};
export default Layout;
