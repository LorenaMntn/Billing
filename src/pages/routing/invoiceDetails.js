import { Button, CssBaseline, Box, Typography, Divider } from '@mui/material';
import data from '../../components/InvoiceDetailsDatabase';
import { ArrowBack } from '@mui/icons-material';
import { useRouter } from 'next/router';

const Details = (props) => {
  const router = useRouter();
  const invoice = data.filter(
    (element) => element.id === Number(router.query.id)
  )[0];
  return (
    <Box sx={{ maxWidth: '600px', m: '0 auto' }}>
      <CssBaseline />
      <Box
        display="flex"
        alignItems="center"
        color="#32424E"
        sx={{ p: '.5em' }}
      >
        <ArrowBack onClick={() => router.back()} />
        <Typography variant="h5" sx={{ fontWeight: '700', ml: '.75em' }}>
          October
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{
          p: '0 1em',
          color: '#fff',
          background: 'linear-gradient(90deg, #26A1B7 0%, #0372AE 100%)',
        }}
      >
        <Box sx={{ color: '#fff' }}>
          <Typography variant="caption">Invoice number</Typography>
          <Typography variant="body1">{invoice.id}</Typography>
        </Box>
        <Box textAlign="right">
          <Typography variant="caption">Paid on</Typography>
          <Typography variant="body1">21/10/2020</Typography>
        </Box>
      </Box>
      <Box>
        <Box
          display="flex"
          justifyContent="space-between"
          gutterBottom
          sx={{ m: '1em 1em 0' }}
        >
          <Typography gutterBottom variant="body1" sx={{ fontWeight: '700' }}>
            Plan details
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: '700' }}>
            Amount
          </Typography>
        </Box>
        <Typography
          gutterBottom
          variant="body1"
          sx={{ fontWeight: '500', p: '0 1.3em' }}
        >
          ILIMITADA 30
        </Typography>
        <Box
          gutterBottom
          display="flex"
          justifyContent="space-between"
          sx={{ m: '0 1.3em' }}
        >
          <Typography gutterBottom variant="body2" sx={{ opacity: '0.7' }}>
            21/09/2021 - 21/10/2020
          </Typography>
          <Typography variant="body1"> 49.99{'\u20AC'} </Typography>
        </Box>
        <Divider sx={{ m: '.5em 1.3em' }} />
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ m: '0 1.3em' }}
        >
          <Typography variant="body1" sx={{ fontWeight: '700' }}>
            Sub Total
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: '700' }}>
            123456
          </Typography>
        </Box>
        <Box sx={{ m: '0 .7em' }}>
          <Button
            variant="outlined"
            fullWidth
            color="inherit"
            sx={{
              mt: '1em',
              color: '#000',
              borderRadius: '2em',
            }}
          >
            VIEW INVOICE AS PDF
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
