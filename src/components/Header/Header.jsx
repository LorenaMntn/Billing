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
      variant="permanent"
      sx={{
        width: '100%',
        height: '18.1em',
        background: 'linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)',
        color: '#ffff',
      }}
    >
      <Typography
        sx={{
          width: '100%',
          height: '3.1em',
          fontSize: '1.5em',
          fontWeight: '700',
          padding: '1.1em 0 0 1em',
        }}
      >
        Billing
      </Typography>
      <AccountBalance />
    </Grid>
  );
};

export default Header;
