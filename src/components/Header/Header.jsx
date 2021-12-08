import { Grid, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AccountBalance from './HeaderAccountBalance';

const Header = () => {
  return (
    <Box
      item
      container
      sx={{
        left: '240px',
        height: '18.1em',
        background: 'linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)',
        color: '#ffff',
      }}
    >
      <Typography
        sx={{
          height: '3.1em',
          fontSize: '1.5em',
          fontWeight: '700',
          padding: '1.1em 0 0 1em',
        }}
      >
        Billing
      </Typography>
      <AccountBalance />
    </Box>
  );
};

export default Header;
