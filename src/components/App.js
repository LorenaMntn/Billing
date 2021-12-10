import * as React from 'react';
import { Grid, CssBaseline } from '@mui/material';
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
      <Grid item sx={{ width: { lg: 'calc(100vw - 240px)', sm: '2' } }}>
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
