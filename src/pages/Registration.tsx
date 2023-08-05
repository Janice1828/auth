import React from "react";
import { FormControl } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Input from "@material-ui/core/Input/Input";
import Button from "@material-ui/core/Button/Button";
import Box from "@material-ui/core/Box/Box";
import Container from "@material-ui/core/Container/Container";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
const Registration = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography color="primary" variant="h4">
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
        <Grid item>
          <Button color="primary" variant="contained">
            Register
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Registration;
