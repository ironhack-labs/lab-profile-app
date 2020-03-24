import React from "react";
import { Link } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    margin: "10vh 0 2.5vh 0"
  },
  submit: {
    textDecoration: "none",
    margin: "2.5vh 0"
  },
  wrapper: {
    width: "40%",
    margin: theme.spacing(3, 0, 2)
  }
}));

export const HomePage = () => {
  const classes = useStyles();

  return (
    <Container component="main">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h1" className={classes.title}>
          Iron Profile
        </Typography>

        <Typography component="h1" variant="h5">
          Today we will create an app with authoritation, adding some cool
          stlyles!
        </Typography>

        <div className={classes.wrapper}>
          <Link to="/login" className={classes.submit}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log In
            </Button>
          </Link>

          <Link to="/signup" className={classes.submit}>
            <Button fullWidth variant="contained" color="secondary">
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};
