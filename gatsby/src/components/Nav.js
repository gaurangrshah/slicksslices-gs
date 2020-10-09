import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Logo from "./Logo";

const paths = [
  { path: "/", label: "Hot Now" },
  // { path: '/beers', label: 'Beers' },
  { path: "/pizzas", label: "Pizza Menu" },
  { path: "/", label: <Logo />, className: "logo-item" },
  { path: "/slice-masters", label: "SliceMasters" },
  { path: "/order", label: "Order Ahead" },
];

const Nav = () => (
  <NavStyles>
    <ul>
      {paths.map(({ path, label, ...rest }, i) => (
        <NavLink key={i} path={path} label={label} {...rest} />
      ))}
    </ul>
  </NavStyles>
);

export default Nav;

const NavLink = ({ path, label, ...rest }) => (
  <li {...rest}>
    <Link to={path}>{label}</Link>
  </li>
);

const NavStyles = styled.nav`
  /* margin-bottom: 3rem; */
  .logo {
    transform: translateY(-25%);
  }
  ul {
    margin: 0;
    padding: 0;
    margin-top: -4em;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
  }
  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;
    &:nth-child(1) {
      --rotate: 1deg;
    }
    &:nth-child(2) {
      --rotate: 2.5deg;
    }
    &:nth-child(4) {
      --rotate: 2.5deg;
    }
    &:hover {
      --rotate: 3deg;
    }
  }
  a {
    font-size: 3rem;
    text-decoration: none;
    display: block;
    &:hover {
      color: var(--red);
    }
    @media (max-width: 800px) {
      font-size: 2rem;
    }
  }
  @media (max-width: 600px) {
    --columns: 4;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--grey);
    padding-bottom: 2px;
    ul {
      grid-template-rows: auto auto;
      grid-template-columns: repeat(var(--columns), 1fr);
    }
    .logo-item {
      order: 0;
      grid-column: 1 / -1;
      justify-items: center;
    }
    .logo {
      transform: none;
    }
  }
  @media (max-width: 500px) {
    --columns: 2;
    .logo {
      transform: none;
    }
  }
`;
