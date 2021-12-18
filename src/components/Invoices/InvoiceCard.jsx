import { Stack, Grid, Paper, Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';

const statusColor = {
  ISSUED: '#64CEFB',
  PAID: '#7DBE00',
  OVERDUE: '#CF4520',
};

const month = [
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

const InvoiceCard = (props) => {
  const newDate = props.due.split('/');
  const getMonth = month[newDate[1] - 1];

  return (
    <Paper
      sx={{
        outline: {
          lg: props.changeBorderColor ? '2px solid lightblue' : 'undefined',
          xs: 'none',
        },
        cursor: 'pointer',
        mb: '1em',
        height: '6.5em',
        boxShadow: '0 2px 2px -2px #888',
      }}
    >
      <Grid container justifyContent="space-between" sx={{ width: '100%' }}>
        <Stack sx={{ margin: '6px 0 6px 16px' }}>
          <Typography variant="subtitle1" sx={{ opacity: '0.4' }}>
            Invoice {props.id}
          </Typography>
          <Typography gutterBottom variant="h6" sx={{ fontWeight: '600' }}>
            {getMonth}
          </Typography>
          <Typography variant="subtitle1" sx={{ opacity: '0.7' }}>
            {props.status === 'OVERDUE'
              ? `Was due on`
              : props.status === 'PAID'
              ? `Paid on`
              : `Due on`}{' '}
            {props.due}
          </Typography>
        </Stack>
        <Stack sx={{ margin: '6px 0 6px 16px' }}>
          <Typography
            variant="caption"
            sx={{
              p: '0 8px',
              width: '75px',
              m: '.5em 0 .5em auto',
              borderRadius: '1em 0 0 1em',
              // position: 'absolute',
              backgroundColor: statusColor[props.status],
              color: '#fff',
              textAlign: 'center',
              fontWeight: '800',
            }}
          >
            {props.status}
          </Typography>
          <Box textAlign="right" sx={{ mr: '.5em' }}>
            <Typography variant="h5" sx={{ fontWeight: '600' }}>
              {props.amount}
              {'\u20AC'}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: '.5em',
                opacity: '0.7',
              }}
            >
              View
            </Typography>
          </Box>
        </Stack>
      </Grid>
    </Paper>
  );
};

export default InvoiceCard;
