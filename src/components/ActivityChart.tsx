import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const ChartContainer = styled.div`
  background-color: #2c2f33;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;

const data = {
  labels: ['5', '9', '11', '13', '15', '17', '19', '21'],
  datasets: [
    {
      label: 'Activity',
      data: [5, 10, 15, 10, 5, 15, 20, 15],
      backgroundColor: 'rgba(114, 137, 218, 0.2)',
      borderColor: '#7289da',
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
    },
    x: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
};

const ActivityChart: React.FC = () => {
  return (
    <ChartContainer>
      <Line data={data} options={options} height={100} />
    </ChartContainer>
  );
};

export default ActivityChart;
