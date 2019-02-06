import React from 'react';
import { Container } from 'semantic-ui-react';

const Layout = ({ children }) => {
  return <Container text>{children}</Container>;
};

export default Layout;
