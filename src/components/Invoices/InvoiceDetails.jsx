import { Grid, Paper, Box, Typography, Container } from '@mui/material';
import { Close } from '@mui/icons-material';

const InvoiceDetails = () => {
  return (
    <Grid
      sx={{
        mt: '3em',
        position: 'sticky',
        backgroundColor: '#fff',
      }}
    >
      <Paper
        sx={{
          p: '1em',
          width: '100%',
          heigth: '100%',
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
          <Close />
        </Typography>

        <Box display="flex" justifyContent="space-between" sx={{ mb: '2em' }}>
          <Box>
            <Typography variant="caption" sx={{ opacity: '0.7' }}>
              Invoice number
            </Typography>
            <Typography variant="body1" sx={{ color: '#32424e' }}>
              000584758832
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption" sx={{ opacity: '0.7' }}>
              Paid on
            </Typography>
            <Typography variant="body1" sx={{ color: '#32424e' }}>
              21/10/2020
            </Typography>
          </Box>
        </Box>

        <Box>
          <Box display="flex" justifyContent="space-between">
            <Typography gutterBottom variant="body1" sx={{ fontWeight: '700' }}>
              Plan details
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: '700' }}>
              Amount
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography gutterBottom variant="body1" sx={{ fontWeight: '700' }}>
              Plan details
            </Typography>
            <Typography variant="h8"> Amount </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6">Sub Total</Typography>
            <Typography variant="h6">123456</Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default InvoiceDetails;
