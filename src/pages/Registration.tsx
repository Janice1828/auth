import React from "react";
import { FormControl, FormHelperText } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Input from "@material-ui/core/Input/Input";
import Button from "@material-ui/core/Button/Button";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container/Container";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const Registration = () => {
  const [contacts, setContacts] = useState<
    { email: string; password: string; confirmPassword: string }[]
  >([]);
  const [email, setEmail] = useState("");
  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const addData = () => {

  // };
  const history = useHistory();
  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);

    if (
      !hasLetter ||
      !hasNumber ||
      password !== confirmPassword ||
      password.length < 8
    ) {
      alert("Your Password Format Is Wrong");
      e.preventDefault();
    } else {
      const datas = {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      };
      const allContacts = [...contacts, datas];
      setContacts(allContacts);

      localStorage.setItem("contacts", JSON.stringify(allContacts));
      alert("Registered Successfully");

      e.preventDefault();
      history.push("/");
    }
  };
  return (
    <Container>
      <form style={{ width: "650px", margin: "auto" }} onSubmit={formSubmit}>
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
                onChange={emailChange}
                required
              />
              <FormHelperText error>{emailError}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="password">
                Password{" "}
                <span style={{ fontSize: "12px" }}>
                  ( Password Must Contain at least 8 character long & must
                  include at least one alphabet and number)
                </span>
              </InputLabel>
              <Input
                id="password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
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
                required
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </FormControl>
          </Grid>
          <Grid item style={{ display: "flex", gap: "20px" }}>
            <Button color="primary" variant="contained" type="submit">
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
