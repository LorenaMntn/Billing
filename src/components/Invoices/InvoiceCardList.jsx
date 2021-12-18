import InvoiceCard from './InvoiceCard';
import { Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const InvoiceCardList = ({ data }) => {
  const theme = useTheme();
  const router = useRouter();
  
  // const desktopVersion = useMediaQuery(theme.breakpoints.down('lg'));
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
            onClick={()=>setShowDetails(number)}
            key={number.id}
            id={number.id}
            due={number.due}
            status={number.status}
            amount={number.amount}
            // href={`/routing/${number.id}`}
          />
        ))}
      </Box>
    </Box>
  );
};

export default InvoiceCardList;
