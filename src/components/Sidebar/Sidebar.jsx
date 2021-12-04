import {
  Box,
  CssBaseline,
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Drawer,
  Divider,
  List,
  Item,
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
const toolbarHeight = 90;
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
    <Box sx={{ p: 0 }}>
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
            paddingRight:0,
          }}
        >
          <Stack>
            <Typography
              variant="h6"
              className={classes.rightText}
              sx={{ pt: 1, fontWeight: 'bold' }}
            >
              Viasat
            </Typography>
            <Typography variant="h6" className={classes.boldText}>
              Alex Garcia
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.8 }}>
              alex.garcia@gmail.com
            </Typography>
          </Stack>
        </Toolbar>
        <Divider />
        <List>
          {['HOME', 'BILLING', 'ACCOUNT SETTING', 'HELP & FAQ'].map(
            (text, index) => (
              <ListItem button key={text}>
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
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
};

export default Sidebar;
