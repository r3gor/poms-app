import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField'
import { TabPanel } from '../components/TabPanel';
import { Chip, CssBaseline, Divider } from '@mui/material';

export const TopicsDataForm = ({ topicsQuantity, setPlanData }) => {
  const [valueTab, setValueTab] = useState(0);
  const [topicsData, setTopicsData] = useState([])

  useEffect(() => {
    setPlanData(topicsData);
  }, [topicsData])

  useEffect(() => {
    if (topicsQuantity > 0) {
      setTopicsData([...Array(topicsQuantity).keys()].map((el) => ({ name: '', pomodoros: 0, })))
    }
  }, [topicsQuantity])

  const handleChange = (event, newValue) => {
    setValueTab(newValue);
  };

  if (topicsQuantity <= 0) return (
    <Box m={1}>
      <Chip color="warning" label='Ingrese una cantidad de temas mayor a cero.' />
    </Box>
  )

  return (
    <>
      {/* <CssBaseline /> */}
      <Divider>Información de los temas</Divider>
      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 'auto', border: 1, borderColor: 'divider' }}
        borderRadius='15px'
        width='auto'
        margin='10px'
      >
        <Tabs
          orientation="vertical"
          variant="fullWidth"
          value={valueTab}
          onChange={handleChange}
          sx={{
            borderRight: 1, borderColor: 'divider'
          }}
          centered
        >
          {
            [...Array(topicsQuantity).keys()].map((i) => <Tab key={i} label={i} />)
          }
        </Tabs>

        {
          topicsQuantity != 0
          &&
          [...Array(topicsQuantity).keys()].map((i) => (
            <TabPanel key={i} index={i} value={valueTab}>
              <TextField label="Tema" variant="outlined" onChange={(e) => {
                setTopicsData((prev) => {
                  const prevData = prev[i];
                  return {
                    ...prev,
                    [i]: { ...prevData, name: e.target.value }
                  }
                })
              }} />
              <TextField label="Pomodoros" variant="outlined" onChange={(e) => {
                setTopicsData((prev) => {
                  const prevData = prev[i];
                  return {
                    ...prev,
                    [i]: { ...prevData, pomodoros: e.target.value }
                  }
                })
              }} />
            </TabPanel>
          ))
        }
      </Box>
    </>
  )
}
