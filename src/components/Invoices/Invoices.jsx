import { Stack, Grid, Typography } from '@mui/material';
import InvoiceCard from './InvoiceCard';
import InvoiceDetails from './InvoiceDetails';

const Invoices = () => {
  return (
    <Grid
      item
      container
      variant="permanent"
      sx={{
        height: '100vh',
        color: '#000',
      }}
    >
      <InvoiceCard />
      <InvoiceDetails />
    </Grid>
  );
};

export default Invoices;
