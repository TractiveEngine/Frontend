import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { HiEye, HiEyeOff } from "react-icons/hi";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Bookings = () => {
  const [error, setError] = useState("");
  const [inputField, setInputField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "+234 ",
    address: "",
    farmSize: "",
    location: ""
  });

  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert(inputField.title);

    const cred = {
      firstName: inputField.firstName,
      lastName: inputField.lastName,
      email: inputField.email,
      phone: inputField.phone,
      address: inputField.address,
      farmSize: inputField.farmSize,
      location: inputField.location,
    };

    console.log(cred);

    //  axios
    //    .post("/sign-up/", cred)
    //    .then((res) => console.log(res.data));
  };

 




  return (
    <Cont>
      <Wrap>
        <h3 className="heading">Farmer's data (tractor owner)</h3>
        {error && <div className="error">{error}</div>}

        <Form onSubmit={handleSubmit}>
          <FormControl>
            <InputField>
              <TextField
                fullWidth
                name="firstName"
                label="First Name"
                variant="outlined"
                onChange={inputsHandler}
                value={inputField.firstName}
              />
            </InputField>
            <InputField>
              <TextField
                fullWidth
                name="lastName"
                label="Last Name"
                variant="outlined"
                onChange={inputsHandler}
                value={inputField.lastName}
              />
            </InputField>
          </FormControl>

          <FormControl>
            <InputField>
              <TextField
                fullWidth
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                onChange={inputsHandler}
                value={inputField.email}
              />
            </InputField>
            <InputField>
              <TextField
                fullWidth
                name="phone"
                label="Phone"
                type="tel"
                variant="outlined"
                onChange={inputsHandler}
                value={inputField.phone}
              />
            </InputField>
          </FormControl>

          <FormControl className="single">
            <InputField>
              <TextField
                fullWidth
                name="address"
                label="Address"
                type="text"
                variant="outlined"
                onChange={inputsHandler}
                value={inputField.address}
              />
            </InputField>
            <InputField>
              <TextField
                fullWidth
                name="location"
                label="Location"
                type="text"
                variant="outlined"
                onChange={inputsHandler}
                value={inputField.location}
              />
            </InputField>
          </FormControl>
          

          <Cta>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Cta>
        </Form>
        <div className="link">
          <p>
            Already have an Account? <Link to="/sign-in">Sign In</Link>{" "}
          </p>
        </div>
      </Wrap>
    </Cont>
  );
};

const Cont = styled.div`
  /* p  */
  padding: 10vh 5%;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
const Wrap = styled.div`
  /* p  */
  width: 50%;
  margin: auto;
  /* From https://css.glass */
  background: rgba(216, 216, 216, 0.21);
  color: ${(props) => props.theme.fontColor};
  background: ${(props) => props.theme.bg2};
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.1px);
  -webkit-backdrop-filter: blur(4.1px);
  border: 1px solid rgba(216, 216, 216, 0.65);
  padding: 50px;
  border-radius: 20px;

  @media (max-width: 900px) {
    width: 100%;
    padding: 20px;
  }

  .heading {
    margin-bottom: 20px;
    font-size: 30px;
    color: var(--white);
  }
  .link {
    margin: 20px;
    display: grid;
    gap: 10px;
  }
`;
const Form = styled.form`
  /* p  */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  border: ${(props) => props.theme.fontColor};
  /* background: ${(props) => props.theme.bg2}; */

  button {
    width: 100%;
    padding: 20px 10px;
    border-radius: 8px;
    outline: none;
    border: none;
  }
`;
const FormControl = styled.div`
  /* p  */

  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  &.single {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const InputField = styled.div`
  /* p  */
  width: 100%;
  position: relative;

  .show {
    position: absolute;
    right: 20px;
    bottom: 13px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s all;
    border-radius: 50px;

    &:hover {
      background: #f2f2f2;
    }
  }
`;
const Input = styled.input`
  /* p  */
  width: 100%;
  padding: 20px 10px;
  border-radius: 8px;
  outline: none;
  border: none;
  background: rgba(0, 0, 0, 0.05);
`;

export default Bookings;
