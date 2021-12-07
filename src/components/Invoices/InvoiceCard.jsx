import { Stack, Grid, Paper, Box, Typography } from '@mui/material';

const InvoiceCard = () => {
  return (
    <Box>
      <Typography
        variant="subtitle1"
        sx={{
          width: '662px',
          height: '50px',
          fontWeight: '700',
        }}
      >
        My Invoices
      </Typography>
      <Paper elevation="1" sx={{ width: '661px', height: '104px' }}>
        <Grid container>
          <Stack sx={{ margin: '6px 0 6px 16px' }}>
            <Typography variant="subtitle1">Invoice</Typography>
            <Typography gutterBottom variant="h6">
              Month
            </Typography>
            <Typography variant="subtitle1">Due on 21/10/2021</Typography>
          </Stack>
          <Stack sx={{ margin: '6px 0 6px 16px' }}>
            <Typography variant="subtitle1">Invoice</Typography>
            <Typography gutterBottom variant="h6">
              Month
            </Typography>
            <Typography variant="subtitle1">Due on 21/10/2021</Typography>
          </Stack>
        </Grid>
      </Paper>
    </Box>
  );
};

export default InvoiceCard;
