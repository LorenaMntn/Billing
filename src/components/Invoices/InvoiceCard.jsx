import { Stack, Grid, Paper, Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';

const statusColor = {
  ISSUED: '#64CEFB',
  PAID: '#7DBE00',
  OVERDUE: '#CF4520',
};

const InvoiceCard = (number) => {
  return (
    <Grid>
      <Paper
        sx={{
          '&.MuiPaper-root': {
            border: number.id === 'true' ? '2px solid lightblue' : 'null',
          },
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
                m: '.5em 0 .5em auto',
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
    </Grid>
  );
};

export default InvoiceCard;
