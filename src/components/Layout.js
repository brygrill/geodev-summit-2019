import React from 'react';
import { Container } from 'semantic-ui-react';

const Layout = ({ children }) => {
  return (
    <Container text style={{ height: '100%' }}>
      {children}
    </Container>
  );
};

export default Layout;
