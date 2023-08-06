import React from "react";
import { FormControl } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Input from "@material-ui/core/Input/Input";
import Button from "@material-ui/core/Button/Button";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container/Container";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
const Registration = () => {
  return (
    <Container>
      <form style={{ width: "650px", margin: "auto" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography color="primary" variant="h4" align="center">
              Registration Form
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input id="my-input" />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="my-input">Password</InputLabel>
              <Input id="my-input" type="password" />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="my-input">Confirm Password</InputLabel>
              <Input id="my-input" type="password" />
            </FormControl>
          </Grid>
          <Grid item style={{ display: "flex", gap: "20px" }}>
            <Button color="primary" variant="contained">
              Register
            </Button>
            <div>
              OR <Link to="/">Login?</Link>
            </div>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default Registration;
