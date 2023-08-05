import React from "react";
import { FormControl } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Input from "@material-ui/core/Input/Input";
import Button from "@material-ui/core/Button/Button";
import Box from "@material-ui/core/Box/Box";
import Container from "@material-ui/core/Container/Container";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import { makeStyles } from "@material-ui/core";
const Login = () => {
  return (
    <Box height="100vh">
      <Container>
        <form style={{ width: "650px", margin: "auto" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography color="primary" variant="h4" align="center">
                Login Form
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="email">Email address</InputLabel>
                <Input id="email" />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input id="password" type="password" />
              </FormControl>
            </Grid>
            <Grid item style={{ display: "flex", gap: "20px" }}>
              <Button color="primary" variant="contained">
                Login
              </Button>
              <div>
                OR <Link to="/registration">Register?</Link>
              </div>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};
export default Login;
