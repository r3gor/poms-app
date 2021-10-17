import AccountCircle from "@mui/icons-material/AccountCircle";
import Add from "@mui/icons-material/Add";
import {
  AppBar,
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import CreateIcon from '@mui/icons-material/Create';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const sidebarSize = 175;

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    backgroundColor: "#b8c6db",
    backgroundImage: "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)",
    display: "flex",
    flexDirection: "column",
  },
  // background-color: #63a4ff;
  // background-image: linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%);
  sidebar: {
    // backgroundColor: "#f8f9d2",
    // backgroundImage: "linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%)",
    backgroundColor: 'rgb(243,67,52)',
    borderRadius: "0px 20px 20px 0px",
    boxShadow: "1px 1px 3px",
  },

  appbar: {
    position: "static",
    borderRadius: "0px 0px 20px 20px",
  },

  toolbar: {
    justifyContent: "space-between",
    display: "flex",
  },

  containerSidebar: {
    display: "flex",
    height: "calc(100vh - 80px)",
    alignItems: "center",
  },

  containerPage: {
    width: "100%",
    padding: "40px",
  },

  link: {
    textDecoration: "none",
    color: "black",
  },
});

export const Layout = ({ children }) => {
  const classes = useStyles();
  const sidebarBtns = [
    {
      label: "Nuevo plan",
      icon: <CreateIcon />,
      link: "/create",
    },
    {
      label: "Mis planes",
      icon: <LibraryBooksIcon />,
      link: "/plans",
    },
  ];

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6">¡Bienvenido!</Typography>
            <IconButton>
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Box display="flex">
          <Box className={classes.containerSidebar}>
            <Box className={classes.sidebar} width={sidebarSize}>
              <Link style={{textDecoration: 'none'}} to="/">
                <Logo />
              </Link>
              <Divider />
              <List>
                {sidebarBtns.map((btn, index) => (
                  <Link key={index} to={btn.link} className={classes.link}>
                    <ListItemButton>
                      <ListItemIcon sx={{color:'white'}}>{btn.icon}</ListItemIcon>
                      <ListItemText sx={{color:'white'}} primary={btn.label} />
                    </ListItemButton>
                  </Link>
                ))}
              </List>
            </Box>
          </Box>
          <Box className={classes.containerPage}>{children}</Box>
        </Box>
      </div>
    </>
  );
};
