import { Grid, Box, Typography } from '@mui/material';
import { ArrowBack, ContactSupport } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AccountBalance from './HeaderAccountBalance';

const Header = ({ data }) => {
  const theme = useTheme();
  const mobileVersion = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Box
      sx={{
        maxWidth: '100vw',
        color: '#ffff',
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        sx={{
          zIndex: '100',
          position: 'fixed',
          p: '1.35em 0',
          width: '100vw',
          background: 'linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)',
        }}
      >
        {mobileVersion ? <ArrowBack sx={{ ml: '.2em' }} /> : ''}
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '1.5em',
            fontWeight: '700',
            p: '0 0 0 .7em',
          }}
        >
          Billing
        </Typography>
        {mobileVersion ? (
          <ContactSupport sx={{ ml: 'auto', mr: '.2em' }} />
        ) : (
          ''
        )}
      </Box>
      <Box
        sx={{
          width: '100vw',
          p: '5em 0 2.6em',
          background: 'linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)',
        }}
      >
        <AccountBalance data={data} />
      </Box>
    </Box>
  );
};

export default Header;
