import AccountCircle from '@mui/icons-material/AccountCircle';
import Add from '@mui/icons-material/Add';
import {
  AppBar, CssBaseline,
  Divider, IconButton, List, ListItemButton,
  ListItemIcon, ListItemText, Toolbar, Typography
} from '@mui/material';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const sidebarSize = 170;

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    backgroundColor: '#b8c6db',
    backgroundImage: 'linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)',
    display: 'flex',
    flexDirection: 'column',
  },

  sidebar: {
    backgroundColor: '#f8f9d2',
    backgroundImage: 'linear-gradient(315deg, #f8f9d2 0%, #e8dbfc 74%)',
    borderRadius: '0px 20px 20px 0px',
    boxShadow: '1px 2px 6px',
  },

  appbar: {
    position: 'static',
    borderRadius: '0px 0px 20px 20px',
  },

  toolbar: {
    justifyContent: 'space-between',
    display: 'flex',
  },

  containerSidebar: {
    display: 'flex',
    height: 'calc(100vh - 80px)',
    alignItems: 'center',
  },

  containerPage: {
    width: '100%',
    padding: '40px',
  },
  
  link: {
    textDecoration: 'none',
    color: 'black',
  }
})

export const Layout = ({ children }) => {
  const classes = useStyles()
  const sidebarBtns = [
    {
      label: 'Nuevo plan',
      icon: <Add />,
      link: '/create'
    },
    {
      label: 'Mis planes',
      icon: <Add />,
      link: '/plans'
    },
  ]

  return (
    <>
      <CssBaseline />
      <div className={classes.root} >
        <AppBar position='static' className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant='h6'>
              ¡Bienvenido!
            </Typography>
            <IconButton>
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Box display='flex'>
          <Box className={classes.containerSidebar}>
            <Box className={classes.sidebar} width={sidebarSize}>
              <Link to='/'>
                <img alt='logo' src='./pomsapp.png' width='80%' />
              </Link>
              <Divider />
              <List>
                {
                  sidebarBtns.map((btn, index) => (
                    <Link key={index} to={btn.link} className={classes.link}>
                    <ListItemButton>
                      <ListItemIcon>
                        {btn.icon}
                      </ListItemIcon>
                      <ListItemText primary={btn.label} />
                    </ListItemButton>
                    </Link>
                  ))
                }
              </List>
            </Box>
          </Box>
          <Box className={classes.containerPage}>
            {children}
          </Box>
        </Box>
      </div>
    </>
  )
}
