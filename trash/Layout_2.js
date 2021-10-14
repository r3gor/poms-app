import { PlayArrowOutlined } from '@mui/icons-material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CssBaseline from '@mui/material/CssBaseline';
import AddIcon from '@mui/icons-material/Add';
import { AppBar, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useHistory } from 'react-router';

const drawerWidth = 180;

const useStyles = makeStyles((theme) => {
  console.log(theme)
  return {
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    appbar: {
      marginLeft: drawerWidth,
    },
    page: {
      marginTop: theme.mixins.toolbar.minHeight,
      width: '100%',
      padding: '30px',
      margin: 0,
    },
    app_name: {
      paddingTop: '10px',
      textAlign: 'center',
    },
    app_logo: {
      margin: '0 auto',
      fontSize: '70px !important',
    },
  }
})

export const Layout = ({ children }) => {

  const classes = useStyles();
  const history = useHistory();

  const handleNewPlan = () => {
    history.push('/create');
  }

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <AppBar >
        <Box className={classes.appbar}>
          <Toolbar>
            <Typography>
              Welcome Roger!
            </Typography>
          </Toolbar>
        </Box>
      </AppBar>

      <Drawer className={classes.drawer}
        variant='permanent'
        // anchor='left'
        disablepadding='true'
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Typography className={classes.app_name} variant='h6'>
          Poms App
        </Typography>
        <AccessAlarmIcon className={classes.app_logo} /> {/* Logo */}
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleNewPlan}>
              <ListItemIcon>
                <AddIcon color='secondary' />
              </ListItemIcon>
              <ListItemText primary='New Plan' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => console.log('Click: Run plan')}>
              <ListItemIcon>
                <PlayArrowOutlined color='secondary' />
              </ListItemIcon>
              <ListItemText primary='Run plan' />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      
      <Box sx={{
        // backgroundColor: '#f1dfd1',
        // backgroundImage: 'linear-gradient(315deg, #f1dfd1 0%, #f6f0ea 74%)',      
      }} 
        className={classes.page}>
        {children}
      </Box>
    </div>
  )
}
