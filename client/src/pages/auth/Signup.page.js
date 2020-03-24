import React, { useState } from "react";
import { Link } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";

const campus = [
  "Madrid",
  "Barcelona",
  "Miami",
  "Paris",
  "Berlin",
  "Amsterdam",
  "México",
  "Sao Paulo",
  "Lisbon"
];
const course = ["WebDev", "UX/UI", "Data Analytics"];

const ChangeAuth = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      If you don't have an account yet. <Link to="/login">Log in</Link>
    </Typography>
  );
};

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  formControl: {
    margin: theme.spacing(1),
    width: "90%"
  }
}));

export const SignupPage = () => {
  const classes = useStyles();

  const [state, setState] = useState({});

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setState({ ...state, [name]: value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={state.username || ""}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={state.password || ""}
            onChange={handleChange}
          />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel required>Campus</InputLabel>
                <Select
                  label="campus"
                  name="campus"
                  value={state.campus || ""}
                  onChange={handleChange}
                >
                  {campus.map((e, i) => (
                    <MenuItem key={i} value={e}>
                      {e}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel required>Course</InputLabel>
                <Select
                  label="course"
                  name="course"
                  value={state.course || ""}
                  onChange={handleChange}
                >
                  {course.map((e, i) => (
                    <MenuItem key={i} value={e}>
                      {e}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Sign up
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <ChangeAuth />
      </Box>
    </Container>
  );
};
