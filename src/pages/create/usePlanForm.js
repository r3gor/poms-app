import React, { useState } from 'react'

export const usePlanForm = () => {

  const emptyTopic = { title: '', poms: '' };

  const [title, setTitle] = useState('');
  const [topics, setTopics] = useState([emptyTopic]);

  const addTopic = () => {
    setTopics([...topics, emptyTopic]);
  }

  const setTopicField = (index, field, value) => {
    const updatedTopic = { ...topics[index], [field]: value };
    const copy = [...topics];
    copy[index] = updatedTopic;
    setTopics(copy);
  }

  return {
    addTopic, 
    setTopicField, 
    setTitle,
    formData: {title, topics}  
  };
}
