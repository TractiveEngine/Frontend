import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";

const Signup = () => {
  return (
    <Cont>
      <Left>
        <div className="header">
          <h3>Welcome to Tractive-Engine!</h3>
          <p>Join us to de-risk the agricultural value chain together.</p>
        </div>
        <Form>
          <FormControl>
            <InputField>
              <label htmlFor="">Full Name</label>
              <Input type="text" />
            </InputField>
          </FormControl>
          <FormControl>
            <InputField>
              <label htmlFor="">Phone Number</label>
              <Input type="text" />
            </InputField>
          </FormControl>
          <FormControl>
            <InputField>
              <label htmlFor="">Email</label>
              <Input type="email" />
            </InputField>
          </FormControl>
          <FormControl>
            <InputField>
              <label htmlFor="">Password</label>
              <Input type="password" />
            </InputField>
          </FormControl>
        </Form>
      </Left>
      <Right></Right>
    </Cont>
  );
};

const Cont = styled.div`
  display: grid;
  grid-template-columns: 50% auto;
`;

const Left = styled.div`
  padding: 0 20%;

  .header {
    margin-bottom: 10vh;
  }
`;
const Form = styled.form`
  display: grid;
  /* grid-template-columns: 50% auto; */
  grid-gap: 30px;
`;
const FormControl = styled.div`
  /* display: grid;
grid-template-columns: 50% auto; */
`;
const InputField = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 10px;
  }
`;
const Input = styled.input`
  /* display: grid;
grid-template-columns: 50% auto; */
  width: 100%;
  outline: none;
  border: none;
  border: 1px solid var(--dark-green);
  padding: 15px 7px;
  border-radius: 4px;
  background: var(--gray);
`;

const Right = styled.div`
  background: var(--right);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;

export default Signup;
