import * as React from 'react';
import { Grid, Container, CssBaseline } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Invoices from './Invoices/Invoices';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <Grid container>
      <CssBaseline />
      <Grid item xl={'auto'}>
        <Sidebar />
      </Grid>
      <Grid item xl={10} sx={{ width: 'calc(100% - 240px)' }}>
        <Header />
        <Invoices />
      </Grid>
      <Grid item xl={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default App;
