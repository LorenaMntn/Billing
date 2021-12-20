import { Container, Box, Divider, Stack, Typography } from '@mui/material';
import { HistoryOutlined, CalendarTodayOutlined } from '@mui/icons-material';

const AccountBalance = (props) => {
  const filterAccountBalance = () => {
    return props.data.reduce((prev, current) => {
      return current.status === 'ISSUED' || current.status === 'OVERDUE'
        ? prev + current.amount
        : prev;
    }, 0);
  };

  const invoiceOverdue = () => {
    return props.data.reduce((prev, current) => {
      return current.status === 'OVERDUE' ? prev + current.amount : prev;
    }, 0);
  };

  const calculateDate = () => {
    return props.data.filter((element) => {
      return element.status.includes('ISSUED') ? element : '';
    })[0];
  };
  const getInvoice = calculateDate().due.split('/');
  const newNextInvoice =
    getInvoice[0] + '/' + (Number(getInvoice[1]) + 1) + '/' + getInvoice[2];

  return (
    <Stack
      sx={{
        m: {
          xs: '0 auto',
          md: '0 0 0 9em',
          lg: '0 0 0 3em',
        },
        overflowX: 'hidden',
        maxWidth: '62%',
        maxHeight: '20%',
        textAlign: 'center',
      }}
      direction={{ xs: 'column', md: 'row' }}
    >
      <Container disableGutters={true}>
        <Stack sx={{ width: '12em', margin: '0 auto' }}>
          <Typography variant="body1" sx={{ fontWeight: '700' }}>
            Account Balance
          </Typography>
          <Typography
            variant="h3"
            bottom
            sx={{
              m: {
                xs: '0 0 .3em',
              },
            }}
          >
            {filterAccountBalance()}
            {'\u20AC'}
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
            pt: '1em',
            width: '14em',
            wordWrap: 'break-word',
            textAlign: 'center',
          }}
        >
          Next invoice will be issued on {newNextInvoice}
        </Typography>
      </Container>
      <Container
        disableGutters={true}
        sx={{
          width: '100%',
          height: '10em',
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
          <Typography sx={{ fontWeight: '600' }}>
            {invoiceOverdue()}
            {'\u20AC'}
          </Typography>
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
            Due on {getInvoice.join('/')}
          </Typography>
          <Typography sx={{ fontWeight: '600' }}>
            {calculateDate().amount}
            {'\u20AC'}
          </Typography>
        </Box>
      </Container>
      <Typography
        variant="body2"
        sx={{
          display: {
            xs: 'block',
            md: 'none',
          },
          textAlign: 'center',
          m: '1em 0 0',
        }}
      >
        Next invoice will be issued on {newNextInvoice}
      </Typography>
    </Stack>
  );
};

export default AccountBalance;
