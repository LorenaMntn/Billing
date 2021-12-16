import * as React from 'react';
import { useState } from 'react';
import data from './InvoiceDetailsDatabase';
import { Grid, CssBaseline } from '@mui/material';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Invoices from './Invoices/Invoices';
import Footer from './Footer/Footer';

const App = () => {
  const [state, setState] = useState(data);
  return (
    <Grid container>
      <CssBaseline />
      <Grid item md={'auto'}>
        <Sidebar />
      </Grid>
      <Grid
        item
        sm={2}
        md
        sx={{
          maxWidth: {
            lg: 'calc(100vw - 240px)',
          },
        }}
      >
        <Header data={state} />
        <Invoices
          height="240px"
          data={state}
          sx={{ backgroundColor: 'blue' }}
        />
      </Grid>
      <Grid item md={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default App;
