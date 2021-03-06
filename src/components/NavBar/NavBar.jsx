import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function NavBar() {
  return (
    <Nav>
      <Logo>
        <SLink>
          <NavLink to="/">
            <Heading>
              Path&nbsp;Find<span className="r">r</span>
            </Heading>
          </NavLink>
        </SLink>
      </Logo>
      <Burger />
      <NavMenu>
        <SLink>
          <NavLink to="/">Home</NavLink>
        </SLink>
        <SLink>
          <NavLink to="/dijkstra">Dijkstra</NavLink>
        </SLink>
        <SLink>
          <NavLink to="/AStar">
            A<span> *&nbsp;</span> Algorithm
          </NavLink>
        </SLink>
        <SLink>
          <NavLink to="/contact">Contact</NavLink>
        </SLink>
      </NavMenu>
    </Nav>
  );
}

export default NavBar;

const Heading = styled.h1`
  border: 2px white solid;
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;
  :hover {
    background-color: white;
    color: black;
    .r {
      color: #15cdfc;
    }
  }
`;

const Nav = styled.nav`
  width: 100%;
  background: #000;
  height: 100px;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  position: relative;
  padding: 0.5rem calc((100vw - 1000px) / 2);

  @media screen and (min-width: 1400px) {
    /* display: none; */
    padding: 0.5rem calc((100vw - 1200px) / 2);
  }
  @media screen and (min-width: 1100px) and (max-width: 1400px) {
    /* display: none; */
    padding: 0.5rem calc((100vw - 1000px) / 2);
  }

  @media screen and (min-width: 768px) and (max-width: 1100px) {
    /* display: none; */
    padding: 0.5rem calc((100vw - 700px) / 2);
  }
  @media screen and (min-width: 300px) and (max-width: 768px) {
    /* display: none; */
    font-size: 12px;
  }

  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
    flex-direction: column;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  font-weight: 500;
  @media screen and (max-width: 768px) {
  }
`;

const Logo = styled.div`
  display: flex;
  margin-right: auto;
  justify-content: center;
  align-items: center;
`;

const SLink = styled.div`
  & a {
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-size: 1.2rem;
    cursor: pointer;
    align-items: center;
    :hover {
      color: #2eff2e;
      span {
        color: #15cdfc;
      }
    }
    &.active {
      color: #15cdfc;
      span {
        color: #2eff2e;
      }
    }
  }
`;

const Burger = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: auto;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    display: none;
  }
`;
