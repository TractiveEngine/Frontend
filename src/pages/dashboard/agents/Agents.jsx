import React from "react";
import styled from "styled-components";
import Agent from "./Agent";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import '@splidejs/react-splide/css';


const Agents = () => {
  return (
    <Cont>
      <Header>Agents</Header>

      <Splide
        className="My"
        options={{
          arrows: false,
          drag: "free",
          gap: "1rem",
          perMove: 1,
          fixedWidth: "7.5rem",
          pagination: false,
        }}
      >
        <SplideSlide>
          <div className="add_agent">
            <button>+</button>
          </div>
        </SplideSlide>
        <SplideSlide>
          <Agent />
        </SplideSlide>
        <SplideSlide>
          <Agent />
        </SplideSlide>
        <SplideSlide>
          <Agent />
        </SplideSlide>
      </Splide>
    </Cont>
  );
};

const Cont = styled.div`
  /* padding-top: 30vh; */

  .My {
    position: relative;
  }

  .add_agent {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    button {
      width: 50px;
      height: 50px;
      font-size: 50px;
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

const Header = styled.div`
  padding-top: 10vh;
  font-size: 30px;
  position: relative;
  width: auto;
  margin-bottom: 30px;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100px;
    height: 5px;
    background: orange;
  }
`;

const AgentList = styled.ul`
  display: grid;
  grid-template-columns: repeat(25, 1fr);
  gap: 10px;
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

export default Agents;
