import React from 'react';
import styled from 'styled-components';
import { FaBell, FaEnvelope, FaUserCircle } from 'react-icons/fa';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #2c2f33;
`;

const SearchBar = styled.input`
  background-color: #23272a;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: #fff;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: 1rem;
    cursor: pointer;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <SearchBar placeholder="Search" />
      <Icons>
        <FaEnvelope />
        <FaBell />
        <FaUserCircle />
      </Icons>
    </HeaderContainer>
  );
};

export default Header;
