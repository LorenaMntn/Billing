import InvoiceCard from './InvoiceCard';
import { Stack, Grid, Paper, Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';

// const monthNames = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];

const InvoiceCardList = ({ data }) => {
  const router = useRouter();
  const theme = useTheme();
  const desktopVersion = useMediaQuery(theme.breakpoints.down('lg'));
  // const mobileVersion = useMediaQuery(theme.breakpoints.down('sm'));
  return (
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
            // onClick={desktopVersion ? () => push(number.href) : number.onClick}
            onClick={() => router.push('./InvoiceDetails')}
            key={number.id}
            id={number.id}
            amount={number.amount}
            status={number.status}
            due={number.due}
          />
        ))}
      </Box>
    </Box>
  );
};

export default InvoiceCardList;
