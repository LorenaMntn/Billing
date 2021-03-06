import {
  Box,
  CssBaseline,
  Toolbar,
  Typography,
  Drawer,
  Divider,
  List,
  ListItemIcon,
  ListItemButton,
  ListItem,
  ListItemText,
  Stack,
} from '@mui/material';
import {
  HomeOutlined,
  AccountBalanceWalletOutlined,
  AccountCircleOutlined,
  ContactSupportOutlined,
  PowerSettingsNewOutlined,
} from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const sidebarWidth = 240;
const siderbarHeight = 80;
const useStyles = makeStyles({
  leftText: {
    textAlign: 'left',
  },
  rightText: {
    textAlign: 'right',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Box>
      <CssBaseline />
      <Drawer
        sx={{
          width: sidebarWidth,
          '& .MuiDrawer-paper': {
            width: sidebarWidth,
            height: 'calc(100% - 45px)',
            borderRight: '0',
            boxSizing: 'border-box',
            boxShadow: '.3em 0 .3em -.4em #888',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar
          sx={{
            height: siderbarHeight,
            background: '#014656',
            color: '#ffff',
          }}
        >
          <Stack sx={{ width: '100%', padding: '0' }}>
            <Typography
              variant="body1"
              sx={{ pt: 1, fontWeight: 'bold', ml: 'auto' }}
            >
              Viasat
            </Typography>
            <Typography variant="body1" className={classes.boldText}>
              Alex Garcia
            </Typography>
            <Typography variant="body2" sx={{ pb: 1, opacity: 0.8 }}>
              alex.garcia@gmail.com
            </Typography>
          </Stack>
        </Toolbar>
        <Divider />
        <List>
          {['HOME', 'BILLING', 'ACCOUNT SETTING', 'HELP & FAQ'].map(
            (text, index) => (
              <ListItem button key={text} sx={{ gap: '.5em' }}>
                <ListItemIcon
                  sx={{
                    flexBasis: '1.5em',
                    minWidth: 'auto',
                    fontWeight: '700',
                    color: '#32424E',
                  }}
                >
                  {index === 1 ? (
                    <HomeOutlined />
                  ) : index === 2 ? (
                    <AccountBalanceWalletOutlined />
                  ) : index === 3 ? (
                    <AccountCircleOutlined />
                  ) : (
                    <ContactSupportOutlined />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  disableTypography={true}
                  sx={{ fontWeight: '700', color: '#32424E' }}
                />
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
          <ListItemButton sx={{ gap: '.5em' }}>
            <ListItemIcon sx={{ flexBasis: '1.5em', minWidth: 'auto' }}>
              <PowerSettingsNewOutlined sx={{ color: '#32424E' }} />
            </ListItemIcon>
            <ListItem sx={{ fontWeight: '700', color: '#32424E', p: '0' }}>
              LOG OUT
            </ListItem>
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
