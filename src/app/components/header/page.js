"use client";
import React, { useState } from "react";
import styled from "styled-components";

const HeaderWropper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 3rem;
  height: 4rem;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  &:hover {
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.show ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 4rem;
    right: 0;
    background-color: #fff;
    width: 200px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  position: relative;
  z-index: 10;

  &:hover {
    color: #0070f3;
  }
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  margin-left: 7rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 150px;
  position: relative;
  z-index: 1000;

  &:focus {
    border-color: #0070f3;
    outline: none;
  }
`;

const LanguageSelect = styled.select`
  padding: 0.5rem;
  margin-left: 4rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <HeaderWropper>
      <img
        src="https://www.mavenfirst.com/hubfs/Kuvat_sivuille/Asiakkaat/Visma/Digital_Visma_logo%20copy.png"
        alt="Visma logo"
        style={{ height: "2rem", width: "auto", marginLeft: "10rem" }}
      />
      <nav>
        <NavList $show={showMenu}>
          <NavItem>О компании</NavItem>
          <NavItem>Новости</NavItem>
          <NavItem>Новости</NavItem>
          <NavItem>Новости</NavItem>
          <NavItem>Новости</NavItem>
          <SearchInput type="text" placeholder="Search ..." />
          <LanguageSelect>
            <option value="uz">Uz</option>
            <option value="ru">Ру</option>
            <option value="en">En</option>
          </LanguageSelect>
        </NavList>
      </nav>
    </HeaderWropper>
  );
};

export default Header;
