import React from 'react';
import Garden from './components/Garden/Garden';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'

const lightGreenTheme = createMuiTheme({ palette: { primary: lightGreen } })



const App = () => (
  <div className="App">
    <MuiThemeProvider theme={lightGreenTheme}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <TypoGraphy variant="h3"
              color="inherit"
            >
          Welcome to your garden!
          </TypoGraphy>
       </Toolbar>
      </AppBar>
    </MuiThemeProvider>
    <Garden />
  </div>
);

export default App;
