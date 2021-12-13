import { Stack, Grid, Paper, Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { MonitorHeart } from '@mui/icons-material';

const statusColor = {
  ISSUED: '#64CEFB',
  PAID: '#7DBE00',
  OVERDUE: '#CF4520',
};

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

// const getMonth = (month) => {
//   const date = new Date();
//   return monthNames[date.getMonth()];
// };

const InvoiceCard = ({ data }) => {
  const theme = useTheme();
  const mobileVersion = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box
      sx={{
        m: {
          xs: '0 auto',
          md: '0 2.5em 0 10em',
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
            md: '40em',
          },
        }}
      >
        My Invoices
      </Typography>
      {data.map((number) => (
        <Paper
          key={number.id}
          id={number.id}
          amount={number.amount}
          status={number.status}
          due={number.due}
          sx={{
            mb: '1em',
            height: '6.5em',
            boxShadow: '0 2px 2px -2px #888',
          }}
        >
          <Grid container justifyContent="space-between" sx={{ width: '100%' }}>
            <Stack sx={{ margin: '6px 0 6px 16px' }}>
              <Typography variant="subtitle1" sx={{ opacity: '0.4' }}>
                Invoice {number.id}
              </Typography>
              <Typography gutterBottom variant="h6" sx={{ fontWeight: '700' }}>
                {number.due}
              </Typography>
              <Typography variant="subtitle1" sx={{ opacity: '0.7' }}>
                Due on {number.due}
              </Typography>
            </Stack>
            <Stack sx={{ margin: '6px 0 6px 16px' }}>
              <Typography
                variant="caption"
                sx={{
                  p: '0 8px',
                  width: '75px',
                  m: '.5em auto',
                  borderRadius: '1em 0 0 1em',
                  backgroundColor: statusColor[number.status],
                  color: '#fff',
                  fontWeight: '800',
                }}
              >
                {number.status}
              </Typography>
              <Box textAlign="right" sx={{ mr: '.5em' }}>
                <Typography variant="h5" sx={{ fontWeight: '700' }}>
                  {number.amount}
                  {'\u20AC'}
                </Typography>
                <Typography variant="body2" sx={{ mt: '.5em', opacity: '0.7' }}>
                  View
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default InvoiceCard;
