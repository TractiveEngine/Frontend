import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { HiEye, HiEyeOff } from "react-icons/hi";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

const Tractors = () => {
  const [error, setError] = useState("");
  const [inputField, setInputField] = useState({
    name: "",
    tractorType: "",
    plateNum: "",
    phone: "+234 ",
    availability: "",
    capacity: "",
      location: "",
    image: null
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
      name: inputField.name,
      tractorType: inputField.tractorType,
      plateNum: inputField.plateNum,
      phone: inputField.phone,
      availability: inputField.availability,
      capacity: inputField.capacity,
        location: inputField.location,
      image: inputField.image,
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
          <FormControl className="single">
            <InputField>
              <Stack direction="row" alignItems="center" spacing={2}>
                <label htmlFor="contained-button-file">
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <Button variant="contained" component="span">
                    Upload
                  </Button>
                </label>
                <label htmlFor="icon-button-file">
                  <Input accept="image/*" id="icon-button-file" type="file" />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
              </Stack>
            </InputField>
          </FormControl>
          <FormControl>
            <InputField>
              <TextField
                fullWidth
                name="name"
                label="Owner's Name"
                variant="outlined"
                onChange={inputsHandler}
                value={inputField.name}
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

          <FormControl>
            <InputField>
              <TextField
                fullWidth
                name="plateNum"
                label="Plate Number"
                variant="outlined"
                onChange={inputsHandler}
                value={inputField.plateNum}
              />
            </InputField>
            <InputField>
              <TextField
                fullWidth
                name=" tractorType"
                label="Tractor Type"
                variant="outlined"
                onChange={inputsHandler}
                value={inputField.tractorType}
              />
            </InputField>
          </FormControl>

          <FormControl>
            <InputField>
              <TextField
                fullWidth
                name="availability"
                label="Availability"
                type="text"
                variant="outlined"
                onChange={inputsHandler}
                value={inputField.availability}
              />
            </InputField>
            <InputField>
              <TextField
                fullWidth
                name="capacity"
                label="Capacity"
                type="text"
                variant="outlined"
                onChange={inputsHandler}
                value={inputField.capacity}
              />
            </InputField>
          </FormControl>

          
          <FormControl className="single">
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

const Input = styled("input")({
  display: "none",
});



export default Tractors;
