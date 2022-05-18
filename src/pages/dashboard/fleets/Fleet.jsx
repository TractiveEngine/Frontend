import React from "react";
import styled from "styled-components";

const Fleet = () => {
  return (
    <Card>
      <Image></Image>

      <Details>
        <div className="name">tractor</div>
        <div className="dimension">550 Acres</div>

        <BtnGrp>
          <button>status</button>
          <button>Location</button>
        </BtnGrp>
      </Details>
    </Card>
  );
};

const Card = styled.div`
  width: 200px;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  background: #d5d5d5;
`;

const Image = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  margin-bottom: 10px;
  background: blue;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 15px;
    background: orange;
  }
`;

const Details = styled.div`
  padding: 10px;
  position: relative;


  .name {
    font-size: 20px;
    font-weight: 400;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  .dimension {
    font-size: 10px;
  }
`;

const BtnGrp = styled.div`
display:grid;
float: right;
gap: 10px;
/* position: ; */
margin-bottom: 10px;
button {
    padding: 3px 5px;
    outline: none;
    border: none;
    background: green;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    
}
`;

export default Fleet;
