import React from "react";

import { withProtected } from "../../../lib/withProtected";

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

const Page = () => {
  const classes = useStyles();

  return <Container component="main">PROFILE</Container>;
};

export const ProfilePage = withProtected(Page, {});
