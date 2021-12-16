import { Box, Stack, Container, Typography } from '@mui/material';
import InvoiceDetails from './InvoiceDetails';
import useMediaQuery from '@mui/material/useMediaQuery';
import InvoiceCard from './InvoiceCard';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Invoices = ({ data }) => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  let [selectedInvoice, setSelectedInvoice] = useState('');
  return (
    <Box
      item
      container
      sx={{
        height: '100%',
        marginInline: 'auto',
        backgroundColor: '#F2F5F8',
        color: '#000',
      }}
    >
      <Stack sx={{ m: '0 1em' }}>
        <Container
          disableGutters
          sx={{
            marginInline: 'auto',
            maxWidth: '1024px',
            height: '20%',
            m: {
              xs: '0 auto',
              md: '0 auto',
            },
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              pt: '.5em ',
              height: '3.1em',
              fontWeight: '700',
               minWidth: {
                xs: '25em',
                md: '35em',
                lg: '42em',
              },
            }}
          >
            My Invoices
          </Typography>
        </Container>
        <Container
          disableGutters
          sx={{
            display: 'flex',
            maxWidth: '50vw',
            gap: '1rem',
            m: {
              xs: '0 auto',
            },
          }}
        >
          <Box
            sx={{
              maxHeight: '75vh',
              maxWidth: '70%',
              flexGrow: '1',
              overflow: {
                sx: 'none',
                lg: 'scroll',
              },
              p: '.2em',
            }}
          >
            {data.map((number) => (
              <Box
                onClick={() => {
                  if (isDesktop) {
                    setSelectedInvoice(number);
                  } else {
                    router.push(`/routing/invoiceDetails/?id=${number.id}`);
                  }
                }}
                key={number.id}
                selectedInvoice={number.id}
              >
                <InvoiceCard
                  changeBorderColor={
                    number.id === selectedInvoice.id && selectedInvoice
                  }
                  id={number.id}
                  due={number.due}
                  status={number.status}
                  amount={number.amount}
                ></InvoiceCard>
              </Box>
            ))}
          </Box>
          <Box>
            {selectedInvoice && !isMobile && (
              <InvoiceDetails
                invoice={selectedInvoice}
                onClose={() => {
                  setSelectedInvoice('');
                }}
                key={selectedInvoice.id}
                id={selectedInvoice.id}
                amount={selectedInvoice.amount}
                status={selectedInvoice.status}
                due={selectedInvoice.due}
              ></InvoiceDetails>
            )}
          </Box>
        </Container>
      </Stack>
    </Box>
  );
};

export default Invoices;
