import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

export const PlanCard = ({ planName, topics, startPlan }) => {

  const handleStart = () => startPlan(planName);

  const totalPoms = topics.reduce((prev, curr) => prev + curr.poms, 0);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {planName}
        </Typography>
        {
          topics.map((el, index) => (
            <Typography key={index} variant="body1" color="text.secondary">
              {el.title} ({el.poms})
            </Typography>
          ))
        }
        <Divider/>
        <Typography paddingTop='10px' variant="body2" color="text.secondary">
          {totalPoms} poms en total.
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleStart} size="small">Iniciar</Button>
        <Button size="small">Editar</Button>
      </CardActions>
    </Card>
  )
}
