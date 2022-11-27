import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Cta } from "../../components/Styles";
import { Link } from "react-router-dom";
import tractor from "../../../assets/mockups/unsplash_6NMrg-7Hkyo.png";
import field from "../../../assets/mockups/Group 20.png";
import img from "../../../assets/mockups/Group 34080.png";

const Signin = () => {
  return (
    <Cont>
      <Left>
        <div className="header">
          <h3>Welcome to Tractive-Engine!</h3>
          <p>Sign In to Continue</p>
        </div>
        <Form>
          <FormControl>
            <InputField>
              <label htmlFor="">Email</label>
              <Input type="email" placeholder="Email..." />
            </InputField>
          </FormControl>
          <FormControl>
            <InputField>
              <label htmlFor="">Password</label>
              <Input type="password" placeholder="Password" />
            </InputField>
          </FormControl>
          <div className="verifications">
            <div className="checkbox">Remember me</div>
            <div className="f_password">ForgotPassword? </div>
          </div>
          <FormControl>
            <InputField>
              <Cta className="submit">
                <button type="submit">Sign In</button>
              </Cta>
              <p>
                Don't have an account? <Link to="/sign-up"> Sign Up</Link>
              </p>
            </InputField>
          </FormControl>
        </Form>
      </Left>
      <Right>
        {/* <div className="tractor">
          <img src={tractor} alt="" />
        </div>
        <div className="field">
          <img src={field} alt="" />
        </div>
        <div className="mobile"></div> */}
        <img src={img} alt="" />
        <div className="text">De-risking the agricultural value chain</div>
      </Right>
    </Cont>
  );
};

const Cont = styled.div`
  display: grid;
  grid-template-columns: 50% auto;
  color: var(--dark-green);
  @media (max-width: 900px) {
    grid-template-columns: 100%;
    background: var(--right);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    color: #fff;
  }
`;

const Left = styled.div`
  padding: 5% 20%;

  @media (max-width: 900px) {
    padding: 13vh 5% 0;
  }

  .header {
    margin-bottom: 7vh;

    h3 {
      font-size: 30px;
      margin-bottom: 10px;
    }

    @media (max-width: 900px) {
      text-align: center;
      margin-bottom: 4vh;

      h3 {
        font-size: 20px;
      }

      p {
        font-size: 13px;
      }
    }
  }
`;
const Form = styled.form`
  display: grid;
  /* grid-template-columns: 50% auto; */
  grid-gap: 20px;

  .verifications {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
  }
`;
const FormControl = styled.div`
  /* display: grid;
grid-template-columns: 50% auto; */

  .submit {
    button {
      width: 100%;
      padding: 15px;
      font-size: 18px;
      margin-bottom: 10px;
    }
  }

  p {
    font-size: 13px;
  }
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
  /* border: 1px solid var(--dark-green); */
  padding: 12px 7px;
  border-radius: 4px;
  background: var(--dark-green-3);

  @media (max-width: 900px) {
    background: var(--dark-green-4);
  }
`;

const Right = styled.div`
  background: var(--right);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
text-align: center;
  position: relative;

  @media (max-width: 900px) {
    display: none;
  }
/*
  .tractor {
    position: absolute;
    top: 8%;
    right: 57%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    background: #fff;
    height: 120px;
    border-radius: 500px;

    z-index: 1;

    img {
      width: 80%;
      margin: auto;
    }
  }
  .field {
    position: absolute;
    top: 10%;

    right: 20%;
    z-index: 2;
    width: 45%;
    img {
      width: 100%;

    }
  }
  .mobile {
    position: absolute;
    bottom: 30%;
    left: 20%;
    right: 20%;

    img {
      width: 70%;
      margin: auto;
    }
  } */

  img {
    width: 65%;
    margin: auto;
  }



  .text {
    position: absolute;
    bottom: 3%;
    left: 30%;
    width: 40%;
    font-size: 25px;
    color: #fff;
    text-align: center;
  }
`;

export default Signin;
