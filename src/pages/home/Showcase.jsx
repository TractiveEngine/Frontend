import React from "react";
import styled from "styled-components";
import { Cta } from "../../components/Styles";
import { Link } from "react-router-dom";
import hero from "../../../assets/mockups/unsplash_SPzzE4TYxZ0.png";
import bg from "../../../assets/mockups/Mask Group.png";
import dot2 from "../../../assets/mockups/Turquoise Circle.png";
import dot1 from "../../../assets/mockups/Orange Circle.png";

const Showcase = () => {
  return (
    <Cont>
      <Text>
        <h3 className="heading">Tractive Engine</h3>
        <p className="desc">De-risking the agricultural value chain.</p>
        <BtnGrp>
          <Cta>
            <Link to="/">Get Started</Link>
          </Cta>
          <Cta>
            <Link to="/" className="outline">
              Login
            </Link>
          </Cta>
        </BtnGrp>
      </Text>
      <Image>
        <img src={bg} alt="" className="bg" />
        <img src={hero} alt="" className="hero" />
        <img src={dot1} alt="" className="dot1" />
        <img src={dot2} alt="" className="dot2" />
      </Image>
    </Cont>
  );
};

const Cont = styled.div`
  height: auto;
  padding: 0 0 0 5%;
  display: grid;
  grid-template-columns: 40% auto;
  grid-gap: 50px;
  /* justify-content: space-between; */
  align-items: center;
  /* border-radius: 50px; */
  /* background: #32c; */

  @media (max-width: 900px) {
    grid-template-columns: 100%;

  }
`;
const Text = styled.div`
  /* p  */

  .heading {
    font-size: 56px;
    margin-bottom: 20px;
    color: var(--black);
    @media (max-width: 900px) {
     font-size: 36px;
    }
  }
  .desc {
    font-size: 18px;
    margin-bottom: 30px;
    color: var(--black-2);
  }
  @media (max-width: 900px) {
    text-align: center;
  }
`;
const BtnGrp = styled.div`
  /* p  */
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  @media (max-width: 900px) {
    width: 80%;
   margin: auto;
  }
`;
const Image = styled.div`
  /* p  */
  width: 100%;
  text-align: center;
  /* height: 100%; */
  /* background: var(--hero);
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat; */
  position: relative;

  .bg {
    width: 65%;
    position: absolute;
    z-index: -1;
    right: 0;
    top: -15vh;
  }

  .hero {
    width: 70%;
    margin: auto;
    margin-left: -20%;
    margin-top: 20vh;
    /* position: absolute;
    left: 10%;
    top: 40%; */
  }

  .dot1 {
    width: 50px;
    position: absolute;
    bottom: 15vh;
    left: 6%;
    z-index: -1;
  }
  .dot2 {
    width: 50px;
    position: absolute;
    bottom: -10vh;
    left: 45%;
  }

  @media (max-width: 900px) {
 display: none;
  }
`;

export default Showcase;
