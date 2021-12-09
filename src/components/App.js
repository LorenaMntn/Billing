import * as React from 'react';
import { Grid, Box, Container, CssBaseline } from '@mui/material';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Invoices from './Invoices/Invoices';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <Grid container>
      <CssBaseline />
      <Grid item md={'auto'}>
        <Sidebar />
      </Grid>
      <Grid item lg={{ width: 'calc(1280-240px)' }} sm={8}>
        <Header />
        <Invoices />
      </Grid>
      <Grid item md={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default App;
