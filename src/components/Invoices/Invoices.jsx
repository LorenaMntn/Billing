import { Box, Stack, Container, Typography } from '@mui/material';
import InvoiceCard from './InvoiceCard';
import InvoiceDetails from './InvoiceDetails';

const Invoices = () => {
  return (
    <Box
      position="fixed"
      sx={{
        margin: '0 auto',
        width: '100%',
        minHeight: '55vh',
        backgroundColor: '#F2F5F8',
        color: '#000',
      }}
    >
      <Stack>
        <InvoiceCard />
        <InvoiceDetails />
      </Stack>
    </Box>
  );
};

export default Invoices;
