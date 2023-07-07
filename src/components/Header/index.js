import React from "react";
import { HeaderWrapper } from "./Header.styled";
import logo from "../../assets/logo.png";
import HomeButton from "./HomeButton/HomeButton";

const Header = () => {
  return (
    <header>
      <HeaderWrapper>
        <img src={logo} alt="logo" />
        <h1>T-Shirt Shop</h1>
        <HomeButton />
      </HeaderWrapper>
    </header>
  );
};

export default Header;
