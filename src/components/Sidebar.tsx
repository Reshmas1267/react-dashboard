import React from 'react';
import styled from 'styled-components';
import { FaChartPie, FaListAlt, FaUserAlt, FaCogs } from 'react-icons/fa';

const SidebarContainer = styled.div`
  background-color: #2c2f33;
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  cursor: pointer;

  svg {
    margin-right: 1rem;
  }

  &:hover {
    color: #7289da;
  }
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <MenuItem>
        <FaChartPie />
        <span>Dashboard</span>
      </MenuItem>
      <MenuItem>
        <FaListAlt />
        <span>Orders</span>
      </MenuItem>
      <MenuItem>
        <FaUserAlt />
        <span>Customers</span>
      </MenuItem>
      <MenuItem>
        <FaCogs />
        <span>Settings</span>
      </MenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;
