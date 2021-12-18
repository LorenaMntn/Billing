import {
  Container,
  Button,
  CssBaseline,
  Box,
  Typography,
  Divider,
} from '@mui/material';
import data from '../../components/InvoiceDetailsDatabase';
import { ArrowBack, ArrowForwardIos } from '@mui/icons-material';
import { useRouter } from 'next/router';

const Details = (props) => {
  const router = useRouter();
  const invoice = data.filter(
    (element) => element.id === Number(router.query.id)
  )[0];
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxWidth: '600px',
        minHeight: '100vh',
        m: '0 auto',
      }}
    >
      <CssBaseline />
      <Box sx={{ maxHeight: '70%' }}>
        <Box
          display="flex"
          alignItems="center"
          color="#32424E"
          sx={{ p: '.5em' }}
        >
          <ArrowBack onClick={() => router.back()} />
          <Typography variant="h5" sx={{ fontWeight: '600', ml: '.75em' }}>
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
            <Typography variant="caption">
              {invoice.status === 'OVERDUE'
                ? `Was due on`
                : invoice.status === 'PAID'
                ? `Paid on`
                : `Due on`}
            </Typography>
            <Typography variant="body1">{invoice.due}</Typography>
          </Box>
        </Box>
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            gutterBottom
            sx={{ m: '1em 1em 0' }}
          >
            <Typography gutterBottom variant="body1" sx={{ fontWeight: '600' }}>
              Plan details
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: '600' }}>
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
            <Typography variant="body1">
              {' '}
              {invoice.amount}
              {'\u20AC'}{' '}
            </Typography>
          </Box>
          <Divider sx={{ m: '.5em 1.3em' }} />
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ m: '0 1.3em' }}
          >
            <Typography variant="body1" sx={{ fontWeight: '600' }}>
              Sub Total
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: '600' }}>
              {invoice.amount} {'\u20AC'}
            </Typography>
          </Box>
          <Box sx={{ m: '0 1.5em' }}>
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
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        sx={{
          backgroundColor: '#F2F5F8',
          p: '1em .5em',
          boxShadow: '0px -1px 3px rgba(50, 50, 50, 0.2)',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: '600' }}>
          Total: {invoice.amount}
          {'\u20AC'}
        </Typography>
        <Button
          variant="contained"
          component="span"
          endIcon={<ArrowForwardIos />}
          sx={{
            mt: '.5em',
            borderRadius: '2em',
            backgroundColor: '#04819E',
            color: '#fff',
            fontWeight: '600',
          }}
        >
          GO TO PAYMENT
        </Button>
      </Box>
    </Box>
  );
};

export default Details;
