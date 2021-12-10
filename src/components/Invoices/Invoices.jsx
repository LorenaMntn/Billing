import { Box, Stack, Container, Typography } from '@mui/material';
import InvoiceCard from './InvoiceCard';
import InvoiceDetails from './InvoiceDetails';

const Invoices = () => {
  return (
    <Box
      item
      container
      sx={{
        minWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: '#F2F5F8',
        color: '#000',
      }}
    >
      <Stack direction="row" sx={{ m: '0 1.5em' }}>
        <InvoiceCard />
        <InvoiceDetails />
      </Stack>
    </Box>
  );
};

export default Invoices;
