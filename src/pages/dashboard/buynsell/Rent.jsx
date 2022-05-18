import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

const Rent = () => {
  return (
    <Cont>
      <Header>
        <button>Sell Produce</button>
      </Header>
      <ProductList>
        <Card>
          <Image></Image>
        </Card>
        <Card>
          <Image></Image>
        </Card>
        <Card>
          <Image></Image>
        </Card>

        <div className="add_agent">
          <button>
            <FaArrowRight />
          </button>
        </div>
      </ProductList>
    </Cont>
  );
};

const Cont = styled.div`
  margin-bottom: 50px;
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
