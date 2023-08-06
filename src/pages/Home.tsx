import React from "react";
import Nav from "../component/Nav";
import { Container, Grid } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ReceiptIcon from "@material-ui/icons/Receipt";
import BarChartIcon from "@material-ui/icons/BarChart";
import StorageIcon from "@material-ui/icons/Storage";
import WatchLaterIcon from "@material-ui/icons/WatchLater";

import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PersonIcon from "@material-ui/icons/Person";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import Box from "@material-ui/core/Box/Box";
import Typography from "@material-ui/core/Typography/Typography";
const Home = () => {
  const styledCss = {
    boxShadow: "0px 0px 10px 1px #009656",
    padding: "50px",
    display: "flex",
    color: "#009656",
    justifyContent: "center",
    cursor: "pointer",
    alignItems: "center",
    gap: "15px",
  };
  const iconStyle = {
    fontSize: "35px",
  };
  return (
    <div>
      <Nav />
      <Container>
        <Grid container spacing={5} style={{ marginTop: "30px" }}>
          <Grid item sm={12}>
            <Typography variant="h3">Welcome User</Typography>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Box style={styledCss} flexDirection="column">
              <CheckCircleIcon style={iconStyle} />
              <Typography variant="subtitle1">Active Status</Typography>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Box style={styledCss} flexDirection="column">
              <ReceiptIcon style={iconStyle}></ReceiptIcon>
              <Typography variant="subtitle1">Register A Patient</Typography>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Box style={styledCss} flexDirection="column">
              <LocalHospitalIcon style={iconStyle}> </LocalHospitalIcon>
              <Typography variant="subtitle1">Capture Vitals</Typography>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Box style={styledCss} flexDirection="column">
              <BarChartIcon style={iconStyle}></BarChartIcon>
              <Typography variant="subtitle1">Reports</Typography>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Box style={styledCss} flexDirection="column">
              <WatchLaterIcon style={iconStyle}></WatchLaterIcon>
              <Typography variant="subtitle1">
                Appointment Scheduling
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Box style={styledCss} flexDirection="column">
              <StorageIcon style={iconStyle}></StorageIcon>
              <Typography variant="subtitle1">Data Management</Typography>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Box style={styledCss} flexDirection="column">
              <DataUsageIcon style={iconStyle}></DataUsageIcon>
              <Typography variant="subtitle1">Configure Metadata</Typography>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Box style={styledCss} flexDirection="column">
              <PersonIcon style={iconStyle}></PersonIcon>
              <Typography variant="subtitle1">System Administration</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
