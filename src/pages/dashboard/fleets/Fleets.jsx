import React from 'react'
import Fleet from './Fleet';
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

const Fleets = () => {
  return (
    <Cont>
      <Header>Fleets</Header>
      <Splide
        className="My"
        options={{
          arrows: false,
          drag: "free",
          gap: "1rem",
          perMove: 1,
          fixedWidth: "12.5rem",
          pagination: false,
        }}
      >
        <SplideSlide>
          <div className="add_agent">
            <button>+</button>
          </div>
        </SplideSlide>
        <SplideSlide className='slide'>
           <Fleet />
        </SplideSlide>
        <SplideSlide className='slide'>
           <Fleet />
        </SplideSlide>
       
     
      </Splide>
     
    </Cont>
  );
}


const Cont = styled.div`
  /* padding-top: 30vh; */

  .My {
    position: relative;
    /* width: 100%;
    background: #000; */
  }

  .slide{
    margin: 0 20px;
    width: 100%;
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
    width: 80px;
    height: 5px;
    background: orange;
  }
`;

const FleetList = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
  align-items: center;


`;


export default Fleets