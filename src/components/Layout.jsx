import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Box from '@material-ui/core/Box';

const Layout = ({children}) => {
  return(
    <React.Fragment>
        {/* <Header /> */}
      <Box minHeight='100vh'>
        {children}
      </Box>
        <Footer />
    </React.Fragment>
  )
}

export default Layout;