import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

const Rent = () => {
  return (
    <Cont>
      <Header>
        <button>Sell Produce</button>
      </Header>
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
            <button>
              <FaArrowRight />
            </button>
          </div>
        </SplideSlide>
        <SplideSlide>
          <Card>
            <Image></Image>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card>
            <Image></Image>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card>
            <Image></Image>
          </Card>
        </SplideSlide>
      </Splide>
    </Cont>
  );
};

const Cont = styled.div`
  /* padding-top: 30vh; */
  margin-bottom: 50px;

  .add_agent {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    button {
      width: 50px;
      height: 50px;
      font-size: 20px;
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

const Card = styled.div`
  width: 200px;
  height: 200px;

  border-radius: 10px;
  overflow: hidden;
  /* background: #d5d5d5; */
`;

const Image = styled.div`
  width: 200px;
  height: 200px;
  background: #000;
  overflow: hidden;
  margin-bottom: 10px;
  background: blue;
  position: relative;
`;

const Header = styled.div`
  margin-bottom: 30px;
  button {
    /* margin-left: 20px; */

    outline: none;
    border: none;
    /* background: orange; */
    color: #fff;
    background: green;
    padding: 10px 25px;
    border-radius: 5px;
    font-size: 20px;
  }
`;

const ProductList = styled.ul`
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

export default Rent;
