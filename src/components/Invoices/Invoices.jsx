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
      sx={{
        position: {
          xs: 'inherit',
          lg: 'fixed',
        },
        height: '100%',
        minWidth: '100vw',
        backgroundColor: '#F2F5F8',
        color: '#000',
      }}
    >
      <Stack sx={{ maxWidth: '1240px' }}>
        {data.length === 0 ? (
          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                m: '.5rem auto .3em',
                height: '3em',
                fontWeight: '600',
                maxWidth: '70%',
              }}
            >
              My Invoices
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                m: '0 auto ',
                height: '3.1em',
                fontWeight: '300',
                maxWidth: '70%',
              }}
            >
              There are no invoice available!
            </Typography>
          </Box>
        ) : (
          <Container
            disableGutters
            sx={{
              maxHeight: '100vh',
              display: 'flex',
              gap: '.5rem',
              m: {
                xs: '0 auto',
              },
            }}
          >
            <Box
              sx={{
                maxHeight: '20%',
                minWidth: '70%',
                overflow: {
                  sx: 'none',
                  lg: 'scroll',
                },
                m: '0 auto',
                p: '.3em',
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  m: '.5rem 0 .5em',
                  height: '3em',
                  fontWeight: '700',
                  maxWidth: '70%',
                }}
              >
                My Invoices
              </Typography>
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
        )}
      </Stack>
    </Box>
  );
};

export default Invoices;
