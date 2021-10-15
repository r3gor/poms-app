import PauseCircleOutlineRoundedIcon from '@mui/icons-material/PauseCircleOutlineRounded';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import { Divider, IconButton, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles/';
import React from 'react';
import { useTopicTimer } from './useTopicTimer';

const useStyle = makeStyles({

  root: {
    // display: 'inline-block',
    paddingTop: 10,
    paddingBottom: 2,
    // minWidth: 'auto',
    maxWidth: 340,
    // width: 350,
    flexGrow: 1,
  },
  title: {
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  body: {
    padding: 20,
    display: 'flex',
    justifyContent: 'space-between',
  },
  bodyText: {
    paddingRight: 4,
  },
  bodyTimer: {
    paddingLeft: 4,
  },
  timer: {
    width: 80,
    height: 80,
    border: '0px solid #E14529',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 26,
    borderRadius: '50%',
    backgroundColor: '#FF6347',
    // boxShadow: '2px 1px 3px #FF7256',
    boxShadow: '2px 1px 3px #e14529',
    margin: 'auto',
    color: 'white'
  },
  containerBtns: {
    padding: 6,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  footer: {
    textAlign: 'center',
  },
})

export const PomTopicCard = ({ title, poms }) => {

  const { start, pause, time, status, pomsDone } = useTopicTimer(poms);

  const classes = useStyle();

  return (
    <Paper elevation={4} className={classes.root}>

      <Typography variant='h5' className={classes.title}>
        {title}
      </Typography>
      
      <div className={classes.body}>
        
        <Typography variant='body1' className={classes.bodyText}>
          {pomsDone}/{poms} Pomodoros
        </Typography>
        
        <div className={classes.bodyTimer}>
          
          <div className={classes.timer}>
            {
              `${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`
            }
          </div>
          
          <div className={classes.containerBtns}>
            
            <IconButton onClick={start} size='small'>
              <PlayCircleOutlineRoundedIcon />
            </IconButton>
            <IconButton onClick={pause} size='small'>
              <PauseCircleOutlineRoundedIcon />
            </IconButton>
          
          </div>
        </div>
        
      </div>
      
      <Divider />
      
      <Typography variant='h6' color='CaptionText' className={classes.footer}>
        {status}
      </Typography>
    
    </Paper>
  )
}
