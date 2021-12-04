import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <Grid container sx={{ height: '100%', width: '100%' }}>
      <Sidebar />
      <Footer />
    </Grid>
  );
};

export default App;
