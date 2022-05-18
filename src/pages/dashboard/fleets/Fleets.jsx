import React from 'react'
import Fleet from './Fleet';
import styled from "styled-components";

const Fleets = () => {
  return (
    <Cont>
      <Header>Fleets</Header>
      <FleetList>
        <Fleet/>
        <Fleet/>
        <Fleet />
         <div className="add_agent">
          <button>+</button>
        </div>
      </FleetList>
    </Cont>
  );
}


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


export default Fleets