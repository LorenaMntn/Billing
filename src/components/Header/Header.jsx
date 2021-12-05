import { Grid, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AccountBalance from './HeaderAccountBalance';

const headerWidth = 240;
const headerHeight = 300;

const Header = () => {
  return (
    <Grid
      item
      container
      sx={{
        width: 'calc(100% - 240px)',
        height: '290px',
        background: 'linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)',
        color: '#ffff',
      }}
    >
      <Typography
        sx={{
          width: '100%',
          height: '80px',
          fontSize: '1.4em',
          fontWeight: 'bold',
          padding: '1em 0 0 10px',
        }}
      >
        Billing
      </Typography>
      <AccountBalance />
    </Grid>
  );
};

export default Header;
