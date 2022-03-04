import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Cta } from "../../components/Styles";
import { Data } from "./Features";
import Showcase from "./Showcase";
import mobile from "../../../assets/mockups/iPhone X.png";
import Benefits from "./Benefits";

const Home = () => {
  return (
    <Cont>
      <Showcase />
      <HowItWorks>
        <h3 className="header">How it Works</h3>
        <div className="cards">
          {Data.map((feature, index) => (
            <div className="card" key={index}>
              <div className="icon">
                {feature.icon}
              </div>
              <div className="info">
                <div className="before"></div>
                <h4 className="title">{feature.title}</h4>
                <p className="content">{feature.content}</p>
              </div>
            </div>
          ))}
        </div>
      </HowItWorks>
      <Mobile>
        <div className="text">
          <h3 className="heading">Tractive Engine on Mobile</h3>
          <p className="desc">
            Enjoy the freedom of crow-sourced smart farming on mobile, as well
            as on desktop.
          </p>
          <p className="desc">
            Get help from local agents, and see the benefits of IOT smart
            farming for yourself.
          </p>
          <Cta className="btn">
            <Link to="/sign-in">Get Started</Link>
          </Cta>
        </div>
        <div className="image">
          <img src={mobile} alt="" />
        </div>
      </Mobile>
      <Benefits/>
    </Cont>
  );
};

const Cont = styled.div`
  /* p  */
  /* padding: 0 5%; */
`;
const HowItWorks = styled.div`
  /* p  */
  padding: 10vh 5% 8%;
  .header {
    font-size: 36px;
    margin-bottom: 30px;
  }

  .cards {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 900px) {
      flex-wrap: wrap;
    }
  }

  .card {
    width: 250px;
    display: grid;
    grid-gap: 10px;

    @media (max-width: 900px) {
      margin: auto;
    }

    .icon {
      margin-bottom: 20px;
      color: var(--dark-green);
      font-size: 70px;
    }

    .before {
      width: 20px;
      height: 20px;
      background: var(--orange);
      border-radius: 50px;
      position: relative;
      margin-bottom: 15px;

      &::after {
        content: "..........................";
        position: absolute;
        left: 20px;
        top: -5px;
        font-size: 20px;
        color: var(--black-2);
      }
    }

    .info {
      .title {
        margin-bottom: 10px;
        font-size: 24px;
      }

      .content {
        font-size: 16px;
        line-height: 130%;
        color: var(--black-2);
      }
    }
  }
`;

const Mobile = styled.div`
  /* p  */
  padding: 8% 5%;
  display: grid;
  grid-template-columns: 40% auto;
  align-items: center;
  grid-gap: 50px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .heading {
    font-size: 36px;
    margin-bottom: 20px;
    color: var(--black);
    @media (max-width: 900px) {
      font-size: 36px;
    }
  }
  .desc {
    font-size: 18px;
    margin-bottom: 10px;
    color: var(--black-2);
  }

  .btn {
    margin-top: 20px;
  }

  .image {
    text-align: center;
    img {
      width: 50%;
      margin: auto;
    }
  }
  @media (max-width: 900px) {
    text-align: center;
  }
`;

export default Home;
