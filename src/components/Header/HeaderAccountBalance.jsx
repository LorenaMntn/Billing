import { Grid, Stack, Typography } from '@mui/material';

const AccountBalance = () => {
  return (
    <Grid sx={{ padding: '0' }}>
      <Stack sx={{ ml: '11em', textAlign: 'center' }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          Account Balance
        </Typography>
        <Typography variant="h3">174,97 $</Typography>
      </Stack>
      <Typography
        variant="body2"
        sx={{
          padding: '0',
          width: '14em',
          ml: '11em',
          wordWrap: 'break-word',
          textAlign: 'center',
        }}
      >
        Next invoice will be issued on 28/12/2910
      </Typography>
    </Grid>
  );
};

export default AccountBalance;
