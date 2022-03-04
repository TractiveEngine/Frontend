import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Cta } from "../../components/Styles";
import { benefits } from "./Features";

const Benefits = () => {
  return (
    <Cont>
      <h3 className="header">Connect with us and enjoy the benefits today!</h3>
      <div className="cards">
        {benefits.map((benefit, index) => (
          <div className="card" key={index}>
            <div className="icon">{ benefit.icon}</div>
            <div className="info">
              <h4 className="title">{benefit.title}</h4>
              <p className="content">{benefit.content}</p>
            </div>

            <Link to="/" className="link">
              Explore
            </Link>
          </div>
        ))}
      </div>

      <Cta className="read_more">
        <Link to="/" className="outline">
          Explore
        </Link>
      </Cta>
    </Cont>
  );
};

const Cont = styled.div`
  padding: 8% 5%;
  background: var(--dark-green-2);

  .header {
    font-size: 56px;
    text-align: center;
    margin: auto;
    margin-bottom: 10vh;
    color: #fff;
    width: 80%;

    @media (max-width: 900px) {
      width: 100%;
      font-size: 24px;
    }
  }

  .cards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .card {
    width: 350px;
    display: grid;
    /* grid-template-columns:  ; */
    grid-gap: 20px;
    margin: auto;
    padding: 50px 30px;
    border-radius: 8px;
    background: #fff;

    @media (max-width: 900px) {
      width: 250px;
      margin: 20px auto;
    }

    .icon {
      margin-bottom: 20px;
      color: var(--dark-green);
      font-size: 70px;
    }

    .info {
      .title {
        font-size: 26px;
        margin-bottom: 20px;
        color: var(--black);
      }

      .content {
        font-size: 16px;
        color: var(--black-2);
        line-height: 130%;
      }
    }

    .link {
      color: var(--orange);
      font-size: 12px;
    }
  }

  .read_more {
    margin-top: 10vh;
    text-align: center;

    .outline {
      color: #fff;
      border: 1px solid #fff;
    }
  }
`;

export default Benefits;
