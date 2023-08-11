import React, { useState } from "react";
import { FormControl } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Input from "@material-ui/core/Input/Input";
import Button from "@material-ui/core/Button/Button";
import Box from "@material-ui/core/Box/Box";
import Container from "@material-ui/core/Container/Container";
import { Link, withRouter, RouteComponentProps } from "react-router-dom"; 
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const Login= () => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history=useHistory();
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredEmail = e.currentTarget.email.value;
    const enteredPassword = e.currentTarget.password.value;
    const getData = JSON.parse(localStorage.getItem("contacts")!);
    if (getData) {
      const storedEmail = getData[0]?.email; 
      const storedPassword = getData[0]?.password;
      if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
        localStorage.setItem("loggedIn", "true");
        history.push("/home"); 
        window.location.reload();
      } else {
        alert("Wrong Email Or Password");
      }
    }
  };

  return (
    <Box height="100vh">
      <Container>
        <form style={{ width: "650px", margin: "auto" }} onSubmit={handleLogin}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography color="primary" variant="h4" align="center">
                Login Form
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="email">Email address</InputLabel>
                <Input
                  id="email"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  required
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item style={{ display: "flex", gap: "20px" }}>
              <Button color="primary" variant="contained" type="submit">
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

export default withRouter(Login);
