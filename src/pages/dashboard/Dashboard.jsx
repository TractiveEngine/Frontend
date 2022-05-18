import React from 'react'
import Agents from './agents/Agents'
import styled from "styled-components"
import Fleets from './fleets/Fleets'
import BuyNsell from './buynsell/BuyNsell'

const Dashboard = () => {
  return (
      <Cont>
      <Agents />
      <Fleets />
      <BuyNsell/>
    </Cont>
  )
}

const Cont = styled.div`
  padding: 5%;
`;

export default Dashboard