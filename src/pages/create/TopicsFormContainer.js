import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyle = makeStyles({
  iconAdd: {
    fontSize: '40px !important',
  },
  root: {
    boxShadow: '0px 1px 2px 0px',
    border: '1px solid gray',
    borderRadius: '20px',
  },
  sectionName: {
    backgroundImage: 'linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)',
    width: '100px',
    height: '36px',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid gray',
    borderRadius: '20px',
  },
  sectionNameContainer: {
    position: 'relative',
    top: '-18px',
    textAlign: 'center',
  },
  formsContainer: {
    padding: '30px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
  },
  buttonContainer: {
    marginTop: '30px',
    marginBottom: '10px',
    textAlign: 'center',
  }
})

export const TopicsFormContainer = ({ children, handleAddNew }) => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Box className={classes.sectionNameContainer}>
        <Box className={classes.sectionName}>
          Tópicos
        </Box>
      </Box>
      <Box className={classes.formsContainer}>
        { children }
      </Box>
      <Box className={classes.buttonContainer}>
        <IconButton color='primary' onClick={handleAddNew}>
          <AddCircleIcon className={classes.iconAdd}/>
        </IconButton>
      </Box>
    </Box>
  )
}
