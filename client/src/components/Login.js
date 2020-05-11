import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../actions/usersActions";
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
  const [user, setUser] = useState({ username: "", password: "" });
  const { loading, loginFailed } = useSelector((state) => state.auth);
  const [registered, setRegister] = useState(
    useSelector((state) => state.register.registered)
  );

  const handleLogin = (e) => {
    e.preventDefault();
    setRegister(false);
    dispatch(
      login(() => {
        history.push("/");
      }, user)
    );
  };

  const handleUserChange = (e) =>
    setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value });

  return (
    <Card className=" mx-auto mt-5 p-2" style={{ width: "400px" }}>
      {registered ? (
        <Alert color="success">
          You have successfully registered please login!
        </Alert>
      ) : (
        <></>
      )}
      {loginFailed ? (
        <Alert color="danger">Incorrect Username or Password!</Alert>
      ) : (
        <></>
      )}
      {loading ? (
        <Spinner style={{ margin: "150px", width: "3rem", height: "3rem" }} />
      ) : (
        <Form onSubmit={handleLogin}>
          <FormGroup>
            <Label>Username</Label>
            <Input
              type="text"
              name="username"
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
          </FormGroup>
          <Button>Login</Button>
        </Form>
      )}
    </Card>
  );
};

export default Login;
