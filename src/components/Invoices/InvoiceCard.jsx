import { Stack, Grid, Paper, Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const InvoiceCard = () => {
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
      <Paper
        sx={{
          height: '6.5em',
          boxShadow: '0 2px 2px -2px #888',
        }}
      >
        <Grid container justifyContent="space-between" sx={{ width: '100%' }}>
          <Stack sx={{ margin: '6px 0 6px 16px' }}>
            <Typography variant="subtitle1" sx={{ opacity: '0.4' }}>
              Invoice
            </Typography>
            <Typography gutterBottom variant="h6" sx={{ fontWeight: '700' }}>
              Month
            </Typography>
            <Typography variant="subtitle1" sx={{ opacity: '0.7' }}>
              Due on 21/10/2021
            </Typography>
          </Stack>
          <Stack sx={{ margin: '6px 0 6px 16px' }}>
            <Typography
              variant="caption"
              sx={{
                p: '0 8px',
                width: '75px',
                m: '.5em auto ',
                borderRadius: '1em 0 0 1em',
                backgroundColor: '#64CEFB',
                color: '#fff',
                fontWeight: '800',
              }}
            >
              ISSUED
            </Typography>
            <Box textAlign="right" sx={{ mr: '.5em' }}>
              <Typography variant="h5" sx={{ fontWeight: '700' }}>
                49,99{'\u20AC'}
              </Typography>
              <Typography variant="body2" sx={{ mt: '.5em', opacity: '0.7' }}>
                View
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Paper>
    </Box>
  );
};

export default InvoiceCard;
