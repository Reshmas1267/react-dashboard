import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import CustomerFeedback from './CustomerFeedback';

const DashboardContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #1c1e24;
`;

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <Content>
        <Header />
        <ActivityChart />
        <RecentOrders />
        <CustomerFeedback />
      </Content>
    </DashboardContainer>
  );
};

export default Dashboard;
