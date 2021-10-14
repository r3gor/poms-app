import { CssBaseline, Paper, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles({
  input: {
    fontSize: '20px !important',
    textTransform: 'capitalize !important',
    textAlign: 'center !important',
  },
  container: {
    // backgroundColor: '#f8f9d2',
    // backgroundImage: 'linear-gradient(315deg, #f8f9d2 0%, #e8dbfc 74%)',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    // borderRadius: '30px',
    // boxShadow: '5px 4px 4px 4px gray',
    padding: '20px 25px 25px 25px',
  },
  pomsQuantityContainer: {
    marginTop: '10px',
    display: 'flex',
    alignItems: 'flex-end',
    margin: 'auto'
  },
})

export const TopicForm = ({ index, title, poms, handleChangeTopicForm }) => {

  const classes = useStyles();

  const handleInputChange = (e) => {
    const formField = e.target.name;
    const newValue = parseInt(e.target.value) || e.target.value;
    handleChangeTopicForm(formField, index, newValue)
  }

  return (
    <>
      <CssBaseline />
      <Paper elevation={10}>
      <Box className={classes.container}>
        <TextField variant='standard' sx={{ width: '100%' }}
          inputProps={{ className: classes.input }}
          placeholder='Tema'
          onChange={handleInputChange}
          name='title'
          value={title}
        />
        <Box className={classes.pomsQuantityContainer}>
          <TextField variant='standard' sx={{ width: '80px' }} type='number'
            inputProps={{ className: classes.input }}
            onChange={handleInputChange}
            name='poms'
            value={poms}
          />
          <Typography sx={{ fontSize: '20px', marginLeft: 3 }}> Pomodoro(s) </Typography>
        </Box>
      </Box>
      </Paper>
    </>
  )
}
