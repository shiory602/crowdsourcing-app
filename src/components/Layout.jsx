import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Box from '@material-ui/core/Box';

const Layout = ({children}) => {
  <React.Fragment>
    <Box minHeight='100vh'>
      <Header />
      {children}
      <Footer />
    </Box>
  </React.Fragment>
}

export default Layout;