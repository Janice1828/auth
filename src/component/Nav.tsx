import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import okhatiImg from "../okhatiSolutions.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ background: "red !important" }}>
      <AppBar position="static" style={{ background: "red !important" }}>
        <Toolbar style={{ background: "red !important" }}>
          <Typography variant="h6" className={classes.title}>
            <img
              src={okhatiImg}
              alt="Okati Img"
              height="50px"
              style={{ borderRadius: "50%" }}
            />
          </Typography>
          <Button color="secondary">
            Log Out &nbsp;<ExitToAppIcon></ExitToAppIcon>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
