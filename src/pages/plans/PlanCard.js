import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";

export const PlanCard = ({ planName, topics, startPlan, deletePlan }) => {
  const handleStart = () => startPlan(planName);
  const handleDelete = () => deletePlan();

  const totalPoms = topics.reduce((prev, curr) => prev + curr.poms, 0);

  const [open, setOpen] = React.useState(false);

  return (
    <Card sx={{ minWidth: 250 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {planName}
        </Typography>

        <Typography
          marginBottom="10px"
          variant="subtitle1"
          color="text.secondary"
        >
          {totalPoms} Pomodoros.
        </Typography>

        <List dense={true}>
          <ListItemButton disableGutters onClick={() => setOpen(!open)}>
            <ListItemText primary={`Tópicos (${topics.length})`} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {topics.map((el, index) => (
                <ListItem key={index} sx={{ height: 50 }}>
                  <ListItemText
                    primary={`${el.title}`}
                    secondary={`${el.poms} Pomodoros`}
                  />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
      </CardContent>
      <CardActions>
        <Button
          onClick={handleStart}
          sx={{ color: "rgb(243,67,52)" }}
          size="small"
        >
          Iniciar
        </Button>
        <Button 
          onClick={handleDelete}
          sx={{ color: "rgb(243,67,52)" }} size="small"
        >
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
};
