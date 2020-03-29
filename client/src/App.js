import React from 'react';
import Routes from './Routes'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Navbar from './components/navbar.component'
import {withAuthentication} from './components/session'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121"
    },
    secondary: {
      main:"#F6f6f6"
    }
  }
});


function App() {
  return (
      <MuiThemeProvider theme={theme}>   
        <Navbar />
        <Routes />
      </MuiThemeProvider>
  );
}

export default withAuthentication(App);