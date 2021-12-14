import { Box, Stack, Container, Typography } from '@mui/material';
import InvoiceCardList from './InvoiceCardList';
import InvoiceDetails from './InvoiceDetails';

const Invoices = ({ data }) => {
  return (
    <Box
      item
      container
      sx={{
        minWidth: '100vw',
        backgroundColor: '#F2F5F8',
        color: '#000',
      }}
    >
      <Stack direction="row" sx={{ m: '0 1.5em' }}>
        <InvoiceCardList data={data} />
        <InvoiceDetails />
      </Stack>
    </Box>
  );
};

export default Invoices;
