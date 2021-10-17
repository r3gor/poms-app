import { CssBaseline, Paper, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  input: {
    fontSize: "20px !important",
    textTransform: "capitalize !important",
    textAlign: "center !important",
  },
  container: {
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    padding: "20px 25px 25px 25px",
  },
  pomsQuantityContainer: {
    marginTop: "10px",
    display: "flex",
    alignItems: "flex-end",
    margin: "auto",
  },
});

export const TopicForm = ({ index, title, poms, handleChangeTopicForm }) => {
  const classes = useStyles();

  const handleInputChange = (e) => {
    const formField = e.target.name;
    const newValue = parseInt(e.target.value) || e.target.value;
    handleChangeTopicForm(index, formField, newValue);
  };

  return (
    <>
      <CssBaseline />
      <Paper elevation={10}>
        <Box className={classes.container}>
          <TextField
            variant="standard"
            sx={{ width: "100%" }}
            inputProps={{ className: classes.input }}
            placeholder="Tema"
            onChange={handleInputChange}
            name="title"
            value={title}
          />
          <Box className={classes.pomsQuantityContainer}>
            <TextField
              variant="standard"
              sx={{ width: "80px" }}
              type="number"
              inputProps={{ className: classes.input }}
              onChange={handleInputChange}
              name="poms"
              value={poms}
            />
            <Typography sx={{ fontSize: "20px", marginLeft: 3 }}>
              Pomodoro(s)
            </Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
};
