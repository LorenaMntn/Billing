import {
  Container,
  Box,
  Divider,
  Stack,
  Typography,
  ListItemIcon,
} from '@mui/material';
import { HistoryOutlined, CalendarTodayOutlined } from '@mui/icons-material';

const AccountBalance = () => {
  return (
    <Stack
      sx={{ ml: '11em', width: '41em', textAlign: 'center' }}
      direction="row"
    >
      <Container sx={{ width: '100%' }}>
        <Stack sx={{ width: '12em' }}>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Account Balance
          </Typography>
          <Typography variant="h3">174,97{'\u20AC'}</Typography>
        </Stack>
        <Typography
          variant="body2"
          sx={{
            margin: '2em 0 3.6em',
            width: '14em',
            wordWrap: 'break-word',
            textAlign: 'center',
          }}
        >
          Next invoice will be issued on 28/12/2910
        </Typography>
      </Container>
      <Container
        sx={{
          ml: '150px',
          width: '100%',
          height: '9.2em',
          display: 'flex',
          background: 'rgba(204, 204, 204, 0.3)',
        }}
      >
        <Box sx={{ margin: 'auto', color: '#fff', width: '164px' }}>
          <Typography>
            <HistoryOutlined />
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: '600' }}>
            Overdue Balance
          </Typography>
          <Typography sx={{ fontWeight: '600' }}>124,98{'\u20AC'}</Typography>
        </Box>
        <Divider
          orientation="vertical"
          textAlign="center"
          light
          flexItem
          sx={{ margin: '38px 11px 28px', borderColor: '#fff' }}
        />
        <Box sx={{ margin: 'auto', color: '#fff', width: '164px' }}>
          <Typography>
            <CalendarTodayOutlined />
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: '600' }}>
            Overdue Balance
          </Typography>
          <Typography sx={{ fontWeight: '600' }}>124,98{'\u20AC'}</Typography>
        </Box>
      </Container>
    </Stack>
  );
};

export default AccountBalance;
