import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { InfoUser } from "../Profile/infoUser";

const test = {
  username: "Victor",
  campus: "Madrid",
  course: "DevWeb"
};

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
  }
}));

export const Profile = () => {
  const classes = useStyles();

  const [user, setUser] = useState(test);

  return (
    <Container className={classes.root} component="main">
      <Card className={classes.card}>
        <Typography
          variant="h4"
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Profile
        </Typography>

        {Object.entries(user).map(([key, value]) => (
          <InfoUser key={key} title={key.toUpperCase()} value={value} />
        ))}

        <CardActions className={classes.wrapperButton}>
          <Button>Log Out</Button>
        </CardActions>
      </Card>
    </Container>
  );
};
