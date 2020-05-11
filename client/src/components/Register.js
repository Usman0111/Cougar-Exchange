import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../actions/registerActions";
import {
  Card,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Spinner,
  Alert,
} from "reactstrap";

const Login = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { loading, registerFailed } = useSelector((state) => state.register);
  const [passMismatch, setPassMismatch] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      setPassMismatch(true);
    } else {
      setPassMismatch(false);
      dispatch(
        register(() => {
          history.push("/login");
        }, user)
      );
    }
  };

  const handleUserChange = (e) =>
    setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value });

  return (
    <Card className=" mx-auto mt-5 p-2" style={{ width: "400px" }}>
      {passMismatch ? (
        <Alert color="danger">Passwords do not match</Alert>
      ) : (
        <></>
      )}
      {registerFailed ? (
        <Alert color="danger">Username {user.username} already exists!</Alert>
      ) : (
        <></>
      )}
      {loading ? (
        <Spinner style={{ margin: "150px", width: "3rem", height: "3rem" }} />
      ) : (
        <Form onSubmit={handleRegister}>
          <FormGroup>
            <Label>Username</Label>
            <Input
              type="text"
              name="username"
              onChange={handleUserChange}
              required
            />
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              onChange={handleUserChange}
              required
            />
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              onChange={handleUserChange}
              required
            />
            <Label>Retype password</Label>
            <Input
              type="password"
              name="confirmPassword"
              onChange={handleUserChange}
              required
            />
          </FormGroup>
          <Button>Register</Button>
        </Form>
      )}
    </Card>
  );
};

export default Login;
