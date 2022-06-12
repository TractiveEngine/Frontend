import React from "react";
import styled from "styled-components";
import Rent from "./Rent";
import Sell from "./Sell";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

const BuyNsell = () => {
  return (
    <Cont>
      <Header>Buy and Sell</Header>
      <SubHeader>
        see more items on our:
        <button>Marketplace</button>
      </SubHeader>
      <Sell />
      <Rent/>
     
    </Cont>
  );
};

const Cont = styled.div`
  /* padding-top: 30vh; */
`;

const Header = styled.div`
  padding-top: 10vh;
  font-size: 30px;
  position: relative;
  width: auto;
  margin-bottom: 30px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 170px;
    height: 5px;
    background: orange;
  }
`;

const SubHeader = styled.div`
  font-size: 30px;

  margin-bottom: 30px;
  display: flex;
  align-items: center;

  button {
      margin-left: 20px;
    outline: none;
    border: none;
    background: orange;
    color: #fff;
    padding: 10px 25px;
    border-radius: 5px;
    font-size: 20px;
  }
`;

const FleetList = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
  align-items: center;

  .add_agent {
    button {
      width: 30px;
      height: 30px;
      background: green;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      outline: none;
      color: #fff;
      border: none;
    }
  }
`;

export default BuyNsell;
