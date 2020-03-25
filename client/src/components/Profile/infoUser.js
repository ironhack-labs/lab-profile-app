import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center"
  },
  card: {
    width: "50%",
    height: "60vh",
    padding: "5vh 5vw",
    margin: "15vh 0",
    border: "1px solid #5c6bc0"
  },
  wrapperButton: {
    display: "flex",
    justifyContent: "center"
  },
  value: {
    fontSize: "2em"
  }
}));

export const InfoUser = ({ title, value }) => {
  const classes = useStyles();
  return (
    <CardContent>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        {title}
      </Typography>
      <Typography
        variant="body1"
        className={classes.value}
        color="textPrimary"
        gutterBottom
      >
        {value}
      </Typography>
    </CardContent>
  );
};
