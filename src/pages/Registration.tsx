import React from "react";
import { FormControl } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Input from "@material-ui/core/Input/Input";
import Button from "@material-ui/core/Button/Button";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container/Container";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import { useState } from "react";
const Registration = () => {
  const [contacts, setContacts] = useState<
    { email: string; password: string; confirmPassword: string }[]
  >([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const addData = () => {
    const datas = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    const allContacts = [...contacts, datas];
    setContacts(allContacts);

    localStorage.setItem("contacts", JSON.stringify(allContacts));
  };

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
              <InputLabel htmlFor="email">Email address</InputLabel>
              <Input
                id="email"
                value={email}
                type="email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="confirmPassword">
                Confirm Password
              </InputLabel>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </FormControl>
          </Grid>
          <Grid item style={{ display: "flex", gap: "20px" }}>
            <Button color="primary" variant="contained" onClick={addData}>
              Register
            </Button>
            <div>
              OR <Link to="/">Login?</Link>
            </div>
          </Grid>
        </Grid>
      </form>
      <div>
        {contacts.map((val, ind) => (
          <p key={ind}>{val.email}</p>
        ))}
      </div>
    </Container>
  );
};
export default Registration;
