import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { TopicForm } from './TopicForm';
import { TopicsFormContainer } from './TopicsFormContainer';

// TODO: avoid anonymous lambda functions 

const useStyle = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  titleContainer: {
    marginBottom: '40px'
  },
  title: {
    fontSize: '40px !important',
    textAlign: 'center',
    textTransform: 'capitalize',
    marginBottom: '40px',
  },
  iconAdd: {
    fontSize: '40px !important',
  },
  topicsForm: {
    boxShadow: '0px 1px 2px 0px',
    border: '1px solid gray',
    borderRadius: '20px',
  },
  bottomContainer: {
    marginTop: '35px',
  },
})

export const CreatePage = () => {

  const classes = useStyle();
  const history = useHistory();

  const [planName, setPlanName] = useState('');
  const [topicsData, setTopicsData] = useState([
    { title: '', poms: '' }
  ]);

  const handleChangeTopicForm = (formField, index, newValue) => {

    let copyTopicsData = [...topicsData];
    copyTopicsData[index] = {
      ...topicsData[index],
      [formField]: newValue,
    }
    setTopicsData(copyTopicsData);
  }

  const handleAddTopicForm = () => {
    setTopicsData([
      ...topicsData,
      { title: '', poms: '' }
    ])
  }

  const handleCreatePlan = () => {
    const plans = JSON.parse(localStorage.getItem('plans'));
    localStorage.setItem('plans', JSON.stringify({
      ...plans, 
      [planName]: topicsData
    }) )
    history.push('/plans')
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.titleContainer}>
        <TextField variant='standard'
          value={planName}
          placeholder='Título'
          onChange={(e) => { setPlanName(e.target.value) }}
          InputProps={{ classes: { input: classes.title } }}
        />
      </Box>

      <TopicsFormContainer handleAddNew={handleAddTopicForm}>
        {
          topicsData.map(({ title, poms }, index) => (
            <TopicForm
              key={index}
              title={title} poms={poms} index={index}
              handleChangeTopicForm={handleChangeTopicForm}
            />
          ))
        }
      </TopicsFormContainer>

      <Box className={classes.bottomContainer}>
        <Button onClick={handleCreatePlan} variant='contained'>
          Crear
        </Button>
      </Box>
    </Box>
  )
}
