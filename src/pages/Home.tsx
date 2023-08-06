import React from "react";
import Nav from "../component/Nav";
import { Container, Grid } from "@material-ui/core";
// import CheckIcon from "@mui/icons-material/Check";
const Home = () => {
  return (
    <div>
      <Nav />
      <Container>
        <Grid container>
          <Grid item lg={3}>
            {/* <CheckIcon /> */}
            <span>Active Status</span>
          </Grid>
          <Grid item lg={3}>
            <span>Register A Patient</span>
          </Grid>
          <Grid item lg={3}>
            <span>Capture Vitals</span>
          </Grid>
          <Grid item lg={3}>
            <span>Reports</span>
          </Grid>
          <Grid item lg={3}>
            <span>Appointment Scheduling</span>
          </Grid>
          <Grid item lg={3}>
            <span>Data Management</span>
          </Grid>
          <Grid item lg={3}>
            <span>Configure Metadata</span>
          </Grid>
          <Grid item lg={3}>
            <span>System Administration</span>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
