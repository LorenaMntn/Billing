import { Grid, Button, Paper, Box, Typography, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Close, ArrowForwardIos } from '@mui/icons-material';
import { useState } from 'react';

const InvoiceDetails = (props) => {
  return (
    <Grid
      sx={{
        minWidth: '20em',
        position: 'sticky',
      }}
    >
      <Paper
        sx={{
          p: '1em',
          maxWidth: '20em',
          minHeight: '24em',
        }}
      >
        <Typography
          gutterBottom
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            color: '#0AA5AB',
            fontWeight: '700',
          }}
        >
          View invoice as PDF
          <Close
            onClick={props.onClose}
            sx={{ color: 'black', cursor: 'pointer' }}
          />
        </Typography>

        <Box display="flex" justifyContent="space-between" sx={{ mb: '2em' }}>
          <Box>
            <Typography variant="caption" sx={{ opacity: '0.7' }}>
              Invoice number
            </Typography>
            <Typography variant="body1" sx={{ color: '#32424e' }}>
              {props.id}
            </Typography>
          </Box>
          <Box textAlign="right">
            <Typography variant="caption" sx={{ opacity: '0.7' }}>
              {props.status === 'OVERDUE'
                ? `Was due on`
                : props.status === 'PAID'
                ? `Paid on`
                : `Due on`}{' '}
            </Typography>
            <Typography variant="body1" sx={{ color: '#32424e' }}>
              {props.due}
            </Typography>
          </Box>
        </Box>

        <Box>
          <Box display="flex" justifyContent="space-between" gutterBottom>
            <Typography gutterBottom variant="body1" sx={{ fontWeight: '700' }}>
              Plan details
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: '700' }}>
              Amount
            </Typography>
          </Box>
          <Typography gutterBottom variant="body1" sx={{ fontWeight: '500' }}>
            ILIMITADA 30
          </Typography>
          <Box gutterBottom display="flex" justifyContent="space-between">
            <Typography gutterBottom variant="body2" sx={{ opacity: '0.7' }}>
              21/09/2021 - 21/10/2020
            </Typography>
            <Typography variant="body1">
              {' '}
              {props.amount}
              {'\u20AC'}{' '}
            </Typography>
          </Box>
          <Divider sx={{ m: '.5em 0' }} />
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ mb: '1.5em' }}
          >
            <Typography variant="body1" sx={{ fontWeight: '700' }}>
              Sub Total
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: '700' }}>
              {props.amount}
              {'\u20AC'}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="flex-end">
            <Typography variant="h6" sx={{ fontWeight: '700' }}>
              Total: {props.amount}
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
                fontWeight: '700',
              }}
            >
              GO TO PAYMENT
            </Button>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default InvoiceDetails;
