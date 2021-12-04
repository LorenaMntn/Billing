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
const toolbarHeight = 100;
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
  button: {
    '&.active': {
      color: '#04819E',
      background: '##F2F5F8',
    },
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
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar
          sx={{
            height: toolbarHeight,
            background: '#014656',
            color: '#ffff',
          }}
        >
          <Stack sx={{ width: '100%' }}>
            <Typography
              variant="body1"
              className={classes.rightText}
              sx={{ pt: 1, fontWeight: 'bold' }}
            >
              Viasat
            </Typography>
            <Typography variant="h6" className={classes.boldText}>
              Alex Garcia
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              alex.garcia@gmail.com
            </Typography>
          </Stack>
        </Toolbar>
        <Divider />
        <List>
          {['HOME', 'BILLING', 'ACCOUNT SETTING', 'HELP & FAQ'].map(
            (text, index) => (
              <ListItem button key={text} className={classes.button} >
                <ListItemIcon sx={{ fontWeight: '700', color: '#32424E' }}>
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
                  sx={{ fontWeight: '700', color: '#32424E', paddingLeft: 0 }}
                />
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
          <ListItemButton>
            <ListItemIcon>
              <PowerSettingsNewOutlined sx={{ color: '#32424E' }} />
            </ListItemIcon>
            <Typography sx={{ fontWeight: '700', color: '#32424E' }}>
              LOG OUT
            </Typography>
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
