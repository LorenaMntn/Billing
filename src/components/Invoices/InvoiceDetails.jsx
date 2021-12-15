import { Grid, Paper, Box, Typography, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Close } from '@mui/icons-material';
import { useState } from 'react';

const InvoiceDetails = (props, { onClose }) => {
  const theme = useTheme();
  return (
    <Grid
      sx={{
        mt: '3em',
        position: 'sticky',
      }}
    >
      <Paper
        sx={{
          p: '1em',
          minWidth: '20em',
          minHeight: '21em',
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
          <Close sx={{ color: 'black' }} onClick={onClose} />
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
              Paid on
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
              {props.amount}
            </Typography>
          </Box>
          <Typography gutterBottom variant="body1" sx={{ fontWeight: '500' }}>
            ILIMITADA 30
          </Typography>
          <Box gutterBottom display="flex" justifyContent="space-between">
            <Typography gutterBottom variant="body2" sx={{ opacity: '0.7' }}>
              21/09/2021 - 21/10/2020
            </Typography>
            <Typography variant="body1"> 49.99{'\u20AC'} </Typography>
          </Box>
          <Divider sx={{ m: '.5em 0' }} />
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body1" sx={{ fontWeight: '700' }}>
              Sub Total
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: '700' }}>
              {props.amount}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default InvoiceDetails;
