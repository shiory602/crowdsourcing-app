import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Box from '@material-ui/core/Box';

const Layout = ({children}) => {
  return(
    <React.Fragment>
      <Header />
      <Box minHeight='90vh'>
        {children}
      </Box>
      <Footer />
    </React.Fragment>
  )
}

export default Layout;