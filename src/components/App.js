import * as React from 'react';
import { Grid, CssBaseline } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Invoices from './Invoices/Invoices';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <Grid container>
      <CssBaseline />
      <Grid item xs="auto">
        <Sidebar />
      </Grid>
      <Grid item xs={10}>
        <Header />
        <Invoices />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default App;
