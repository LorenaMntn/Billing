import { Stack, Grid, Paper, Box, Typography } from '@mui/material';

const InvoiceCard = () => {
  return (
    <Box sx={{ ml: '10.6em' }}>
      <Typography
        variant="subtitle1"
        sx={{
          p: '.5em 0 0 1em',
          width: '41.3em',
          height: '3.1em',
          fontWeight: '700',
        }}
      >
        My Invoices
      </Typography>
      <Paper elevation="1" sx={{ width: '661px', height: '104px' }}>
        <Grid container justifyContent="space-between">
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
          <Stack>
            <Typography
              variant="subtitle1"
              sx={{
                p: '0 5px',
                width: '75px',
                mt: '6px',
                opacity: '0.4',
                borderRadius: '1em 0 0 1em',
                backgroundColor: '#00a5eb',
                color: 'white',
              }}
            >
              Issued
            </Typography>
            <Typography gutterBottom variant="h6" sx={{ fontWeight: '400' }}>
              49,9{'\u20AC'}
            </Typography>
            <Typography variant="body2" sx={{ opacity: '0.7' }}>
              View
            </Typography>
          </Stack>
        </Grid>
      </Paper>
    </Box>
  );
};

export default InvoiceCard;
