import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { TopicsDataForm } from './PlanDataForm';

// TODO: avoid anonymous lambda functions 

const useStyle = makeStyles({
  title: {
    fontSize: '40px !important',
    textAlign: 'center',
  },
  input: {
    margin: '10px !important',
  }
})

export const Create = () => {

  const classes = useStyle();

  const [planName, setPlanName] = useState('');
  const [cantidadTemas, setCantidadTemas] = useState(0);
  const [planData, setPlanData] = useState([]);

  return (
    <Box>
      <Typography className={classes.title} variant='h6'> Create plan </Typography>
      <Box display="flex" flexDirection='column'
        justifyContent="center"
        alignItems="center" mx='auto' width='50%' textAlign='center'>
        <TextField value={planName} className={classes.input} fullWidth label="Nombre" variant="outlined"
          onChange={(e) => setPlanName(e.target.value)} />
        <TextField type='number' className={classes.input} fullWidth label="Cantidad de temas" variant="outlined"
          onChange={(e) => setCantidadTemas(parseInt(e.target.value) || 0)} />
        <TopicsDataForm topicsQuantity={cantidadTemas} setPlanData={setPlanData} />
        <Button
          color='secondary'
          variant='contained'
          onClick={() => { console.log({ planName, cantidadTemas, planData }) }}>
          Crear
        </Button>
      </Box>
    </Box>
  )
}
