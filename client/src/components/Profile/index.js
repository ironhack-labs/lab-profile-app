import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import { InfoUser } from "../Profile/infoUser";

const test = {
  username: "Victor",
  campus: "Madrid",
  course: "DevWeb"
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center"
  },
  card: {
    width: "50%",
    height: "65vh",
    padding: "5vh 5vw",
    margin: "10vh 0",
    border: "1px solid #5c6bc0"
  },
  wrapperButton: {
    display: "flex",
    justifyContent: "center"
  },
  wrapperInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  wrapperImage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  large: {
    margin: "0 5vw",
    width: theme.spacing(25),
    height: theme.spacing(25),
    fontSize: theme.spacing(10)
  },
  button: {
    marginTop: "2.5vh",
    border: "1px solid #777",
    padding: "0 2.5vw"
  }
}));

export const Profile = () => {
  const classes = useStyles();

  const [user, setUser] = useState(test);

  return (
    <Container className={classes.root} component="main">
      <Card className={classes.card}>
        <Typography variant="h3" color="textSecondary" gutterBottom>
          Profile
        </Typography>

        <div className={classes.wrapperInfo}>
          <div>
            {Object.entries(user).map(([key, value]) => (
              <InfoUser key={key} title={key.toUpperCase()} value={value} />
            ))}
          </div>
          <div className={classes.wrapperImage}>
            <Avatar
              alt="Avatar Image"
              src={user.image || ""}
              className={classes.large}
            >
              {user.username[0].toLocaleUpperCase()}
            </Avatar>
            <Button className={classes.button}>Edit Photo</Button>
          </div>
        </div>

        <CardActions className={classes.wrapperButton}>
          <Button className={classes.button}>Log Out</Button>
        </CardActions>
      </Card>
    </Container>
  );
};
