import { Grid, Box, Typography } from '@mui/material';
import { ArrowBack, ContactSupport } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import AccountBalance from './HeaderAccountBalance';

const Header = () => {
  const theme = useTheme();
  const mobileVersion = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Box
      item
      container
      sx={{
        minWidth: '100vw',
        minHeight: '18.1em',
        background: 'linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)',
        color: '#ffff',
      }}
    >
      <Box display="flex" alignItems="center" sx={{ margin: '0 .9em' }}>
        {mobileVersion ? <ArrowBack /> : ''}
        <Typography
          sx={{
            height: '3.1em',
            fontSize: '1.5em',
            fontWeight: '700',
            p: '.7em 0 0 .7em',
          }}
        >
          Billing
        </Typography>
        {mobileVersion ? <ContactSupport sx={{ marginLeft: 'auto' }} /> : ''}
      </Box>

      <AccountBalance />
    </Box>
  );
};

export default Header;
