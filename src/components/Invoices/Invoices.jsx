import { Box, Stack, Container, Typography } from '@mui/material';
import InvoiceDetails from './InvoiceDetails';
import useMediaQuery from '@mui/material/useMediaQuery';
import InvoiceCard from './InvoiceCard';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

const Invoices = ({ data }) => {
  const theme = useTheme();
  const desktopVersion = useMediaQuery(theme.breakpoints.down('lg'));
  let [displayDetails, setDisplayDetails] = useState(null);
  console.log(displayDetails);
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

          {data.map((number) => (
            <Box
              onClick={() => {
                setDisplayDetails(number);
              }}
              key={number.id}
            >
              <InvoiceCard
                id={number.id}
                due={number.due}
                status={number.status}
                amount={number.amount}
              ></InvoiceCard>
            </Box>
          ))}
        </Box>
        {displayDetails && (
          <InvoiceDetails
            invoice={displayDetails}
            onClose={() => {
              setDisplayDetails(null);
            }}
            key={displayDetails.id}
            id={displayDetails.id}
            amount={displayDetails.amount}
            status={displayDetails.status}
            due={displayDetails.due}
          ></InvoiceDetails>
        )}
      </Stack>
    </Box>
  );
};

export default Invoices;
