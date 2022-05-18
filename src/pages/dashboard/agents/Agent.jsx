import React from "react";
import styled from "styled-components";

const Agent = () => {
  return (
    <Cont>
      <Avatar>A</Avatar>
      <Name>Name</Name>
    </Cont>
  );
};

const Cont = styled.div`
  /* padding-top: 10vh; */
  display: grid;
  justify-content: center;
  width: 100px;
  text-align: center;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-bottom: 10px;
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Name = styled.small`
 font-size: 12px;
 text-align: center;
`;

export default Agent;
