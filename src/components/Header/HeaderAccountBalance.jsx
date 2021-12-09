import { Container, Box, Divider, Stack, Typography } from '@mui/material';
import { HistoryOutlined, CalendarTodayOutlined } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const AccountBalance = () => {
  const theme = useTheme();
  const mobileVersion = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Stack
      sx={{
        margin: '0 auto',
        maxWidth: '45em',
        textAlign: 'center',
      }}
      direction={{ xs: 'column', md: 'row' }}
      spacing={8}
    >
      <Container disableGutters={true}>
        <Stack sx={{ width: '12em', margin: '0 auto' }}>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Account Balance
          </Typography>
          <Typography variant="h3" bottom>
            174,97{'\u20AC'}
          </Typography>
        </Stack>
        <Typography
          variant="body2"
          sx={{
            display: {
              xs: 'none',
              md: 'block',
            },
            margin: '0 auto',
            mt: '0',
            pt: '2em',
            width: '14em',
            wordWrap: 'break-word',
            textAlign: 'center',
          }}
        >
          Next invoice will be issued on 28/12/2910
        </Typography>
      </Container>
      <Container
        disableGutters={true}
        sx={{
          ml: '0',
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
      <Typography
        variant="body2"
        sx={{
          display: {
            xs: 'block',
            md: 'none',
          },
          pb: '2em',
          textAlign: 'center',
        }}
      >
        Next invoice will be issued on 28/12/2910
      </Typography>
    </Stack>
  );
};

export default AccountBalance;
