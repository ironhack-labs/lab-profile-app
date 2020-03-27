import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { login } from "../../../lib/api/auth.api.js";
import { useSetUser } from "../../../lib/redux/action";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import MuiAlert from "@material-ui/lab/Alert";

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
  }
}));

const Alert = props => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export const Login = connect()(
  withRouter(({ history, dispatch }) => {
    const classes = useStyles();

    const [state, setState] = useState({});
    const [error, setError] = useState(false);

    const handleError = () => {
      setError(true);
      setTimeout(() => setError(false), 3000);
    };

    const handleChange = ({ target }) => {
      const { value, name } = target;
      setState({ ...state, [name]: value });
    };

    const handleSubmit = async e => {
      e.preventDefault();

      try {
        dispatch(useSetUser(await login(state.username, state.password)));
        history.push("/profile");
      } catch (error) {
        if (error.response.statusText == "Unauthorized") handleError();
      }
    };

    return (
      <>
        {error && (
          <Alert severity="error">
            El usuario o la contraseña no son correctas. Vuelva a intentarlo.
          </Alert>
        )}
        <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
              Log in
            </Typography>

            <form className={classes.form} onSubmit={handleSubmit}>
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
                value={state.password || ""}
                onChange={handleChange}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Log In
              </Button>
            </form>
          </div>
          <Box mt={8}>
            <Typography variant="body2" color="textSecondary" align="center">
              If you don't have an account yet.{" "}
              <Link to="/signup">Sign up</Link>
            </Typography>
          </Box>
        </Container>
      </>
    );
  })
);
