import { Box, Stack, Container, Typography } from '@mui/material';
import InvoiceDetails from './InvoiceDetails';
import useMediaQuery from '@mui/material/useMediaQuery';
import InvoiceCard from './InvoiceCard';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

const Invoices = ({ data }) => {
  const theme = useTheme();
  const desktopVersion = useMediaQuery(theme.breakpoints.down('lg'));
  let [displayDetails, setDisplayDetails] = useState({
    status: true,
    display: 'none',
    border: 'none',
    backgroundColor: 'none',
    invoice: data[0],
  });

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
        <Box
          sx={{
            m: {
              xs: '0 auto',
              md: '0 2em 2.5em 8em',
            },
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              p: '.5em 0 0 1em',
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
          <Box>
            {data.map((number) => (
              <InvoiceCard
                onClick={() => {
                  setDisplayDetails(
                    !displayDetails.status
                      ? {
                          status: displayDetails.status,
                          backgroundColor: 'red',
                        }
                      : {
                          status: displayDetails.status,
                          backgroundColor: 'blue',
                        }
                  );
                }}
                key={number.id}
                id={number.id}
                due={number.due}
                status={number.status}
                amount={number.amount}
              ></InvoiceCard>
            ))}
          </Box>
        </Box>
        {!displayDetails.display && !desktopVersion && (
          <InvoiceDetails
            onClick={() => {
              setDisplayDetails({
                status: !displayDetails.status,
                invoice: displayDetails.invoice,
                border: 'none',
              });
            }}
            key={displayDetails.invoice.id}
            id={displayDetails.invoice.id}
            amount={displayDetails.invoice.amount}
            status={displayDetails.invoice.status}
            due={displayDetails.invoice.due}
          >
            {/* {console.log(displayDetails.invoice)} */}
          </InvoiceDetails>
        )}
      </Stack>
    </Box>
  );
};

export default Invoices;
