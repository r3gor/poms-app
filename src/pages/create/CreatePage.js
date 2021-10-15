import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { addNewPlan } from '../../data/data';
import { TopicForm } from './TopicForm';
import { TopicsFormContainer } from './TopicsFormContainer';
import { usePlanForm } from './usePlanForm';

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

  const { 
    addTopic, setTopicField, 
    setTitle, formData: { title, topics }
  } = usePlanForm();

  const handleCreatePlan = () => {
    addNewPlan({ title, topics });
    history.push('/plans')
  }

  return (
    <Box className={classes.root}>

      <Box className={classes.titleContainer}>
        <TextField
          InputProps={{ classes: { input: classes.title } }}
          variant='standard'
          placeholder='Título'
          value={title}
          onChange={(e) => { console.log('titkesadsad'); setTitle(e.target.value) }}
        />
      </Box>

      <TopicsFormContainer handleAddNew={addTopic}>
        {
          topics.map(({ title, poms }, index) => (
            <TopicForm key={index}
              title={title} poms={poms} index={index}
              handleChangeTopicForm={setTopicField}
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
