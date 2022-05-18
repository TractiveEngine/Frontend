import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import logo from "../../Assets/mockups/Logo.svg";
import {
  RiMessengerLine,
  RiYoutubeLine,
  RiWhatsappLine,
  RiFacebookLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <Cont>
      <Left>
        <div className="nav_links">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </div>

        <div className="social_links">
          <Link to="/">
            <RiFacebookLine />
          </Link>
          <Link to="/">
            <RiMessengerLine />
          </Link>
          <Link to="/">
            <RiWhatsappLine />
          </Link>
          <Link to="/">
            <RiYoutubeLine />
          </Link>
        </div>
      </Left>

      <Right>
      <p>&copy; Tractiktive Engine All rights reserved</p>
      </Right>
      {/* <div className="copy_right">Copyright 2022. Coded by Z3phyron_Snides. </div> */}
    </Cont>
  );
};

const Cont = styled.div`
  display: flex;
  justify-content: space-between;
 align-items: center;
  width: 100%;
  background: #000;
  color: #fff;
  padding: 2% 8%;
  /* position: absolute; */
  margin-bottom: -200px;
  /* left: 0; */
  /* bottom: 0; */
  /* width: 100%; */

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Logo = styled.div`
  margin-bottom: 20px;
  a {
    color: var(--Color-1);
    transition: all 0.5s;

    &:hover {
      color: var(--Color-2);
    }
  }
`;
const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  align-items: flex-start;

  a {
    color: #fff;
    transition: all 0.5s;

    &:hover {
      color: var(--Color-2);
    }
  }

  .links {
    li {
      margin-bottom: 10px;
    }
  }
`;
const Left = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-gap: 20px;
  a{
     color: #fff;
  }
 
  .nav_links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }

  .social_links {
    /* margin-top: 20px; */
    display: flex;

    a {
      width: 30px;
      height: 30px;
      background: rgba(57, 57, 57, 0.2);
      display: flex;
      justify-content: center;
      border-radius: 50px;
      margin-right: 20px;
      color: #fff;
      font-size: 20px;
      align-items: center;
    }
  }
`;
const Right = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    list-style: none;
  }
`;
// const SocialLinks = styled.div`
//   display: flex;
// `;

export default Footer;
