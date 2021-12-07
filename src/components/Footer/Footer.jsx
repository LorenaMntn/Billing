import { Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Stack
      direction="row"
      position="fixed"
      bottom="0"
      width="100%"
      maxHeight="44px"
      sx={{ backgroundColor: '#FBFCFD', padding: '10px 0' }}
    >
      <Typography sx={{ p: '0 2.6em' }}>Blog</Typography>
      <Typography sx={{ p: '0 2.6em' }}>About us</Typography>
      <Typography sx={{ p: '0 2.6em' }}>T&C</Typography>
      <Typography sx={{ p: '0 2.6em' }}>Privacy Policy</Typography>
      <Typography sx={{ ml: 'auto', mr: '3em' }}>
        Viasat Internet is a service provided by Viasat Europe Sarl.
      </Typography>
    </Stack>
  );
};

export default Footer;
